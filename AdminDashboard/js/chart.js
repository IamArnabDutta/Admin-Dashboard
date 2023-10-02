//male : Female........................

var xValues = ["Female","Male"];
var yValues = [110,330];
var barColors = [
  "#FFA500",
  "#6495ED"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      
     
    }
  }
});


// Active employee..................
var barChartOptions = {
  series: [
    {
      name: 'Total employee',
      data: [303, 388, 503, 579]
    }, {
      name: 'New Joinee',
      data: [146, 162, 205, 135]
    }, {
      name: 'Offerboarded',
      data: [69, 77, 90, 59 ]
    }
  ],
  chart: {
    type: 'bar',
    height: 200,
    toolbar: {
      show: false,
    },
  },
  colors: [
    '#6495ED',
    '#FFA500',
    '#C0C0C0',
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Apr', 'May', 'Jun', 'Jul', ],
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: '',
      style: {
       
      },
    },
    labels: {
      style: {
        
      },
    },
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      
    },
    show: true,
    position: "bottom",
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands'
      }
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#barchart_material"), barChartOptions);
barChart.render();

//today-this week

document.getElementById("todayButton").addEventListener("click", function () {
    var tableToday = document.getElementById("dataTable");
    var tableThisWeek = document.getElementById("dataTable2");

    tableToday.style.display = "table"; // Display "Today" table
    tableThisWeek.style.display = "none"; // Hide "This week" table
});

document.getElementById("weekButton").addEventListener("click", function () {
    var tableToday = document.getElementById("dataTable");
    var tableThisWeek = document.getElementById("dataTable2");

    tableToday.style.display = "none"; // Hide "Today" table
    tableThisWeek.style.display = "table"; // Display "This week" table
});

//hire vs rerire

  var areaChartOptions = {
    series: [
      {
        name: 'Hire',
        data: [146,162,205,135],
      },
      {
        name: 'Retire',
        data: [69,77,90,59],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 160,
      width:370,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#0096FF', '#FF5F1F'],
    labels: [ 'April', 'May', 'June', 'July'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          
        },
      },
      xaxis: {
        lines: {
          
        },
      },
    },
    legend: {
      labels: {
        
      },
      show: true,
      position: 'left',
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          
        },
      },
    },
    yaxis: [
      {
        title: {
          text:"",
          style: {
            
          },
        },
        labels: {
          style: {
            
          },
        },
      },
      {
        opposite: true,
        title: {
          text: '',
          style: {
           
          },
        },
        labels: {
          style: {
            
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  

//actime employee month.......

const fromInput = document.getElementById("bdaymonth1");
const toInput = document.getElementById("bdaymonth2");

// Set the values for "From" and "To" inputs
fromInput.value = "2023-04"; // April 2023
toInput.value = "2023-07"; 

//head count month.........
const fromInput2 = document.getElementById("bdaymonth3");
const toInput2 = document.getElementById("bdaymonth4");

// Set the values for "From" and "To" inputs
fromInput2.value = "2023-04"; // April 2023
toInput2.value = "2023-07"; 


//"April 2023-July 2023"
const fromDateInput = document.getElementById("date1");
const toDateInput = document.getElementById("date2");

// Set the values for "From" and "To" inputs
fromDateInput.value = "2023-04"; // April 2023
toDateInput.value = "2023-07"; 



