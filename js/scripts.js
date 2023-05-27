// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

function redirectToPurchaseOrders() {
  window.location.href = "/purchase_orders.html";
}
function redirectToProducts() {
  window.location.href = "/products.html";
}

function redirectToAbout()
{
  window.location.href = "/about.html";
}
function redirectToSales()
{
  window.location.href = "/sales.html";
}
function redirectToAlert()
{
  window.location.href = "/inventory_alert.html";
}


// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [10, 8, 11, 7, 2]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
  // Set timeout for the pop-up
  setTimeout(showContactForm, 3000);
});

function closeContactForm() {
  document.getElementById("contact-form").style.display="none";
}


// Function to show the contact form
function showContactForm() {
  // Remove the "hidden" class to display the pop-up
  document.getElementById("contact-form").classList.remove("hidden");

  // Add event listener to the form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the default form behavior
    event.preventDefault();

    // You can add additional logic or actions here if needed

    // Hide the contact form
    document.getElementById("contact-form").classList.add("hidden");
  });
}



















// document.addEventListener("DOMContentLoaded", function () {
//   // Check if the contact form has already been submitted
//   if (!localStorage.getItem("contactFormSubmitted")) {
//     // Delay the display of the popup after 3 seconds
//     setTimeout(function () {
//       document.getElementById("contactPopup").style.display = "block";
//     }, 3000);

//     // Get the contact form element
//     var contactForm = document.getElementById("contactForm");

//     // Add submit event listener to the contact form
//     contactForm.addEventListener("submit", function (event) {
//       event.preventDefault();

//       // Perform form submission actions here (e.g., sending data to the server)

//       // Set a flag in local storage to indicate that the contact form has been submitted
//       localStorage.setItem("contactFormSubmitted", true);

//       // Display the success message
//       alert("Thank you for contacting us!");

//       // Hide the popup
//       document.getElementById("contactPopup").style.display = "none";
//     });
//   }
// });
