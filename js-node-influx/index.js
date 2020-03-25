// Introduction to 'node-influx' = The InfluxDB Client for Node.js and Browsers
//
// In this example we'll create a server which has an index page that prints out "hello world",
// and a page http://localhost:3000/times which prints out the last ten response times that InfluxDB gave us.
//
// The end result should look something like this:
// ➜  ~ curl -s localhost:3000
// Hello world!
// ➜  ~ curl -s localhost:3000/times | jq
// [
//   {
//     "time": "2016-10-09T19:13:26.815Z",
//     "duration": 205,
//     "host": "ares.peet.io",
//     "path": "/"
//   }
// ]

const Influx = require("influx");
const express = require("express");
const http = require("http");
const os = require("os");

const app = express();

// Create a new Influx client. We tell it to use the express_response_db database by default, and give it some information
// about the schema we're writing. It can use this to be smarter about what data formats it writes and do some basic validation for us.
const influx = new Influx.InfluxDB({
  host: "192.168.0.10",
  username: "admin",
  password: "Kolovrat73",
  database: "node_influx_db",
  schema: [
    {
      measurement: "response_times",
      fields: {
        path: Influx.FieldType.STRING,
        duration: Influx.FieldType.INTEGER
      },
      tags: ["host"]
    }
  ]
});

// Now, we have a working Influx client! We'll make sure the database exists and boot the app.
influx
  .getDatabaseNames()
  .then(names => {
    if (!names.includes("node_influx_db")) {
      return influx.createDatabase("node_influx_db");
    }
  })
  .then(() => {
    http.createServer(app).listen(3000, function() {
      console.log("Listening on port 3000");
    });
  })
  .catch(err => {
    console.error(`Error creating Influx database!`);
  });

// Finally, we'll define the middleware and routes we'll use. We have a generic middleware that records the time between
// when requests comes in, and the time we respond to them. We also have another route called /times which prints out
// the last ten timings we recorded.
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`Request to ${req.path} took ${duration}ms`);

    influx
      .writePoints([
        {
          measurement: "response_times",
          tags: { host: os.hostname() },
          fields: { duration, path: req.path }
        }
      ])
      .catch(err => {
        console.error(`Error saving data to InfluxDB! ${err.stack}`);
      });
  });
  return next();
});

app.get("/", function(req, res) {
  setTimeout(() => res.end("Hello world!"), Math.random() * 500);
});

app.get("/times", function(req, res) {
  influx
    .query(
      `
      select * from response_times
      where host = ${Influx.escape.stringLit(os.hostname())}
      order by time desc
      limit 10
    `
    )
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err.stack);
    });
});
