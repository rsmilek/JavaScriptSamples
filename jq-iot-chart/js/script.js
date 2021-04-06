Chart.defaults.global.legend.display = true;
Chart.defaults.global.tooltips.enabled = true;

var data = {
    labels: ["Brasil", "Argentina", "Chile", "México", "Peru", "Paraguai", "Bolívia", "Haiti"],
    datasets: [{
        data: [31.60, 36.57, 23.49, 23.52, 20.34, 21.99, 35.31, 19.37],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
    }]
};

var data2 = {
    labels: ["Brasil", "Argentina", "Chile", "México", "Peru", "Paraguai", "Bolívia", "Haiti"],
    datasets: [{
        data: [41.90, 43.95, 25.83, 27.59, 22.58, 24.45, 41.94, 21.96],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
    }]
};

var myChart = new Chart($("#myChart"), {
    type: 'polarArea',
    data: data,
    options: {
        responsive: true,
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        }
    }
});

$("#intevals li a").click(function (e) {
    e.preventDefault();

    $("#intevals").children("li.page-item").removeClass("active");

    $(this).parent("li.page-item").addClass("active");

    switch ($(this).text()) {
        case "Month":
            myChart.data = data2;
            break;
        default:
            myChart.data = data;
            break;
    }

    // console.log($(this));
    // var foo = eval($(this).data('chart'));
    // console.log(foo);

    // myChart.data.datasets[0] = data2;
    // myChart.data = data2;
    // myChart.data.labels = foo['labels'];

    myChart.update();
});