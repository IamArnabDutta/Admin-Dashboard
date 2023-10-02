//Prediction Hours", "Overtime Hours.....................

var xValues = ["Prediction Hours", "Overtime Hours"];
var yValues = [76,24];
var barColors = [
  
  "#0000FF",
  "#FFA500",
  
];

new Chart("myChart", {
  type: "pie",
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
      text: "Payable Hours"
    }
  }
});


//Overtime vs Idle Hours.....................
var xValues = ["Idle Hours", "Overtime Hours"];
var yValues = [69,31];
var barColors = [
    "#FFA500",
  "#FFFF00"
];

new Chart("myChart2", {
  type: "pie",
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
      text: "Overtime vs Idle Hours"
    }
  }
});




//all checkbox...............
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//Attendance Requests...............

const addRequestBtn = document.getElementById("addRequestBtn");
const showRequestBtn = document.getElementById("showRequestBtn");
const requestList = document.getElementById("requestList");
const requestsUL = document.getElementById("requests");

const attendanceRequests = [];

addRequestBtn.addEventListener("click", () => {
    const request = prompt("Enter a new attendance request:");
    if (request !== null) {
        attendanceRequests.push(request);
    }
});

showRequestBtn.addEventListener("click", () => {
    requestsUL.innerHTML = ""; // Clear previous requests
    attendanceRequests.forEach((request) => {
        const li = document.createElement("li");
        li.textContent = request;
        requestsUL.appendChild(li);
    });

    if (attendanceRequests.length > 0) {
        requestList.style.display = "block";
    } else {
        requestList.style.display = "none";
    }
});

//leave request..............................................................
const names = [];

// Get the buttons and name list element
const addNameBtn = document.getElementById("addNameBtn");
const showNamesBtn = document.getElementById("showNamesBtn");
const nameList = document.getElementById("nameList");
const namesUL = document.getElementById("names");

// Event listener for adding a name
addNameBtn.addEventListener("click", () => {
    const name = prompt("Enter a name:");
    if (name) {
        names.push(name);
    }
});

// Event listener for showing names...................................
showNamesBtn.addEventListener("click", () => {
    namesUL.innerHTML = ""; // Clear the previous names
    names.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        namesUL.appendChild(li);
    });

    if (names.length > 0) {
        nameList.style.display = "block";
    } else {
        nameList.style.display = "none";
    }
});

//announcements...........................................................
const announcementText = document.getElementById("announcementText");
    const addAnnouncementBtn = document.getElementById("addAnnouncementBtn");

    // Initialize with no announcement
    let latestAnnouncement = null;

    addAnnouncementBtn.addEventListener("click", () => {
        const newAnnouncement = prompt("Enter a new announcement:");
        if (newAnnouncement !== null) {
            latestAnnouncement = newAnnouncement;
            updateAnnouncement();
        }
    });

    function updateAnnouncement() {
        if (latestAnnouncement !== null) {
            announcementText.textContent = latestAnnouncement;
        } else {
            announcementText.textContent = "No announcements found";
        }
    }

    // Initial update
    updateAnnouncement();


    //today-this week.......................................................

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


//payable hours month.....................................................

const fromDateInput = document.getElementById("date1");
const toDateInput = document.getElementById("date2");

// Set the values for "From" and "To" inputs
fromDateInput.value = "2023-07-01"; // April 1, 2023
toDateInput.value = "2023-07-10";

//overtime vs hours month.........
const fromDateInput2 = document.getElementById("date3");
const toDateInput2 = document.getElementById("date4");

// Set the values for "From" and "To" inputs
fromDateInput2.value = "2023-07-01"; // April 1, 2023
toDateInput2.value = "2023-07-10"; 

   




//column-line-data chart...................................

var columnChartOptions = {
  series: [
    {
      name: 'Present',
      data: [416, 416, 503, 579,416,380,350]
    }, {
      name: 'Absent',
      data: [46, 162, 205, 135,78,98,87]
    }, {
      name: 'WTH',
      data: [69, 77, 90, 59,65,87,56 ]
    },{
      name: 'Week Off',
      data: [56, 77, 90, 59 ,76,45,43]
    },{
      name: 'Leave',
      data: [35, 77, 90, 59,98,76,45 ]
    }
  ],
  chart: {
    type: 'bar',
    height: 148,
   
    toolbar: {
      show: false,
    },
  },
  colors: [
    '#2e7d32',
    '#2962ff',
    '#d50000',
    "#FFA500",
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
    categories: ['Mon', 'Tue', 'Wed', 'Thrs','Fri','Sat','Sun' ],
    labels: {
      style: {
        
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
    position: "right",
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '' + val + ' '
      }
    }
  }
  // Column chart options...
};

var lineChartOptions = {
  series: [
    {
      name: 'Present',
      data: [146,162,205,135,200,205,67],
    },
    {
      name: 'Absent',
      data: [1,5,2,3,7,2,1],
    },
    {
      name: 'WFH',
      data: [3,10,8,4,3,2,1],
    },
    {
      name: 'Week Off',
      data: [1,7,2,3,4,3,1],
    },
    {
      name: 'Leave',
      data: [1,7,2,3,4,3,1],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 140,
   
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: [ '#2e7d32',
  '#2962ff',
  '#d50000',
  "#FFA500",
  '#C0C0C0',],
  labels: [ 'Mon', 'Tue', 'Wed', 'Thrs' , 'Fri' , 'Sat' , 'Sun'],
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
    position: 'right',
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
   
  },
  // Line chart options...
};

var currentChart = 'column'; // Initially set to 'column'

// Create chart instance
var chart = new ApexCharts(document.querySelector("#chart-container"), columnChartOptions);
chart.render();

// Function to toggle between charts
function toggleChart(chartType) {
  if (chartType === 'column' && currentChart !== 'column') {
      // Switch to column chart
      chart.destroy();
      chart = new ApexCharts(document.querySelector("#chart-container"), columnChartOptions);
      chart.render();
      currentChart = 'column';
  } else if (chartType === 'line' && currentChart !== 'line') {
      // Switch to line chart
      chart.destroy();
      chart = new ApexCharts(document.querySelector("#chart-container"), lineChartOptions);
      chart.render();
      currentChart = 'line';
  }
}