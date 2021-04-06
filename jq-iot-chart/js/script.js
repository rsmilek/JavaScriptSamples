const INTERVALS = ["Day", "Month", "Year"];
const INTERVAL_DEFAULT_INDEX = 0;
const INTERVAL_DEFAULT_CHILD = INTERVAL_DEFAULT_INDEX + 1;

const CHART_DATA_DEFAULT = {
    labels: ["Brasil", "Argentina", "Chile", "México", "Peru", "Paraguai", "Bolívia", "Haiti"],
    datasets: [{
        data: [],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
    }]
};

Chart.defaults.global.legend.display = true;
Chart.defaults.global.tooltips.enabled = true;

var myChart = {};

function CreateChart() {
    myChart = new Chart($("#myChart"), {
        type: 'polarArea',
        data: CHART_DATA_DEFAULT,
        options: {
            responsive: true,
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            title: {
                display: true,
                text: "My Title",
                fontSize: 20
            },
            legend: {
                display: true,
                position: "right"
            },
        }
    });
}

function SetChartData(index) {
    switch (index) {
        case 0:
            myChart.data.datasets[0].data = [31.60, 36.57, 23.49, 23.52, 20.34, 21.99, 35.31, 19.37];
            break;
        case 1:
            myChart.data.datasets[0].data = [41.90, 43.95, 25.83, 27.59, 22.58, 24.45, 41.94, 21.96];
            break;
        case 2:
            myChart.data.datasets[0].data = [46.90, 44.95, 26.83, 29.59, 24.58, 26.45, 46.94, 22.96];
            break;
    }
    myChart.update(); // Repaint chart with new data
}

// Active interval handler
$("#intevals li a").on("click", function (e) {
    e.preventDefault();
    // Activate selected interval
    $("#intevals").children("li.page-item").removeClass("active");
    $(this).parent("li.page-item").addClass("active");
    // Set chart data for selected interval
    SetChartData(INTERVALS.indexOf($(this).text()));
});

$(function () {
    // Activate default interval
    $("#intevals li:nth-child(" + INTERVAL_DEFAULT_INDEX + 1 + ")").addClass("active");
    // Set chart data for active interval
    CreateChart();
    SetChartData(INTERVAL_DEFAULT_INDEX);
});