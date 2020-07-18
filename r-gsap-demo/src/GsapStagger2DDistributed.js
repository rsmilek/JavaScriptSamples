import React, { Component } from "react";
import gsap from "gsap";
import "./GsapStagger2DDistributed.css";

export default class GsapStagger2DDistributed extends Component {
  constructor(props) {
    super(props);
    this.elements = [];
    this.tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, paused: true });
  }

  componentDidMount() {
    /*
        pass in an object with any of the following optional properties (just like the stagger special object):
        {
            amount: amount (in seconds) that should be distributed
            from: "center" | "end" | "edges" | start" | index value (integer)
            ease: any ease, like "power1"
        axis: "x" | "y" (or omit, and it'll be based on both the x and y positions)
        }
    */
    function distributeByPosition(vars) {
      var ease = vars.ease,
        from = vars.from || 0,
        base = vars.base || 0,
        axis = vars.axis,
        ratio = { center: 0.5, end: 1, edges: 0.5 }[from] || 0,
        distances;
      return function (i, target, a) {
        var l = a.length,
          originX,
          originY,
          x,
          y,
          d,
          j,
          minX,
          maxX,
          minY,
          maxY,
          positions;
        console.log(l);
        if (!distances) {
          distances = [];
          minX = minY = Infinity;
          maxX = maxY = -minX;
          positions = [];
          for (j = 0; j < l; j++) {
            d = a[j].getBoundingClientRect();
            x = (d.left + d.right) / 2; //based on the center of each element
            y = (d.top + d.bottom) / 2;
            if (x < minX) {
              minX = x;
            }
            if (x > maxX) {
              maxX = x;
            }
            if (y < minY) {
              minY = y;
            }
            if (y > maxY) {
              maxY = y;
            }
            positions[j] = { x: x, y: y };
          }
          originX = isNaN(from) ? minX + (maxX - minX) * ratio : positions[from].x || 0;
          originY = isNaN(from) ? minY + (maxY - minY) * ratio : positions[from].y || 0;
          maxX = 0;
          minX = Infinity;
          for (j = 0; j < l; j++) {
            x = positions[j].x - originX;
            y = originY - positions[j].y;
            distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
            if (d > maxX) {
              maxX = d;
            }
            if (d < minX) {
              minX = d;
            }
          }
          distances.max = maxX - minX;
          distances.min = minX;
          distances.v = l = (vars.amount || vars.each * l || 0) * (from === "edges" ? -1 : 1);
          distances.b = l < 0 ? base - l : base;
        }
        l = (distances[i] - distances.min) / distances.max;
        return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
      };
    }

    this.tl
      .to("#grid div i", {
        duration: 1,
        scale: 0.1,
        y: 40,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        stagger: distributeByPosition({
          amount: 2,
          //axis: "y",
          //ease: "power2.inOut",
          from: "center", // or try an index like 5
        }),
      })
      .play();
  }

  render() {
    return (
      <div className="container">
        <div id="grid">
          <div>
            <i ref={(el) => (this.elements[0] = el)}></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i style={{ marginLeft: 40 }}></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div>
            <i style={{ marginLeft: 60 }}></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div>
            <i style={{ marginLeft: 30 }}></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div>
            <i></i>
            <i style={{ marginRight: 60, marginTop: 20 }}></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    );
  }
}
