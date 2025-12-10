
const myContainer = document.getElementById("box");
// myContainer.style.padding="0px";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

var data = [["X", "Y"]];
var dataItem=[];
var deleteButtons = [];


function addDataPoint() {
    var xValue = parseFloat(document.getElementById("X").value);
    var yValue = parseFloat(document.getElementById("Y").value);

    var xStyle = document.getElementById("X");
    var yStyle = document.getElementById("Y");

    // Check if the values already exist in the data array
    var isDuplicate = data.some(function (entry) {
        return (
            entry[0] === roundToTwoDecimalPlaces(Number(xValue)) &&
            entry[1] === roundToTwoDecimalPlaces(Number(yValue)) 
        );
    });

    if (xValue == '+' || xValue == '-' || xValue == '*' || xValue == '/' || yValue == '+' || yValue == '-' || yValue == '*' || yValue == '/') {
        alerts('error','Please enter valid value.','Invalid Values!');
        xStyle.style.border="2px solid red";
        return;
    }

    if (isNaN(xValue) && isNaN(yValue)) {
        alerts('error','Please enter values for <b>X</b> and <b>Y</b> and then click on <b style="color:#004E86">SUBMIT</b> button.','Missing Values!');
        xStyle.style.border="2px solid red";
        yStyle.style.border="2px solid red";
        return;
    }
    if (isNaN(xValue)) {
        alerts('error','Please input a value for <b>X</b>.','Missing Value!');
        xStyle.style.border="2px solid red";
        return;
    }
    if (isNaN(yValue)) {
        alerts('error','Please input a value for <b>Y</b>.','Missing Value!');
        yStyle.style.border="2px solid red";
        return;
    }

    if (xValue < 1 || xValue > 10) {
        alerts('error','Enter a value within a range i.e. 1 - 10','Out of range!');  
        xStyle.style.border="2px solid red"; 
        return;
    }
    if (( yValue < 1 || yValue >10)) {
        alerts('error','Enter a value within a range i.e. 1 - 10','Out of range!');
        yStyle.style.border="2px solid red";
        return;
    }
    if (!isDuplicate) {
        data.push([
            roundToTwoDecimalPlaces(Number(xValue)),
            roundToTwoDecimalPlaces(Number(yValue))
        ]);
    
    } else {
        alerts('error','Duplicate values are not allowed.','Duplicate Value!');
        return;
    }

    drawChart();
    updateTable();
   // updateTableForCompute();

    var resbutton=document.getElementById('reset')
    if(resbutton.disabled==true)
    {
      resbutton.disabled=false;
    }

    document.getElementById("X").value = "";
    document.getElementById("Y").value = "";

    if (data.length >= 6) {

            disableAddButton();
            promptToDeleteRow();
       
    }
    
}

function deleteRow(button) {
   
    var row = button.parentNode.parentNode;
  
    var index = row.rowIndex;
    data.splice(index, 1);
    deleteButtons.splice(index - 1, 1);

    drawChart();
    updateTable();
  //  updateTableForCompute();

    if (data.length >= 6) {
        enableAddButton();
        disableDeleteButton();
    }
    if (data.length <= 6) {
   
        disableNextButtonData();
    }
}

function promptToDeleteRow() {
    var tableData=[];
    Swal.fire({
        text: "Do you want to delete any row?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
        target: myContainer,
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const containerWidth = myContainer.offsetWidth;
            const containerHeight = myContainer.offsetHeight;

            // Change font size based on container size
            if (containerWidth >= 1000 && containerHeight >= 672) {
                container.style.fontSize = "24px";
            } else {
                container.style.fontSize = "16px";
            }

            // Adjust dimensions and position of the Swal container
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";


        },
        showCloseButton: false, // Disable the close button
        allowOutsideClick: false, // Prevent closing by clicking outside the modal
        allowEscapeKey: false, // Prevent closing by pressing the escape key
    }).then((result) => {
        if (result.isConfirmed) {
            enableNextButtonData();
            enableDeleteButtons();
        } else {
            disableAddButton();
            disableDeleteButton();
            enableNextButtonData();
            alerts('info','Click on the <b style="color: #004E86">NEXT</b> Button.');
          
        }
    });
    let table = document.getElementById("data-table");
    let rows = table.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
        var rowData = [];
        var cells = rows[i].cells;
      
        // Iterate through each cell of the row
        for (var j = 0; j < cells.length-1; j++) { 
          var cellValue = cells[j].textContent;
          rowData[j] = cellValue;
        }
      
        tableData.push(rowData);
      }
      var serializedData1 = JSON.stringify(tableData); // Convert data to a string format
      localStorage.setItem('objectToPass', serializedData1); 
}

function enableAddButton() {
    document.getElementById("sub-button").disabled = false;
}

function disableAddButton() {
    document.getElementById("sub-button").disabled = true;
}


function enableNextButtonData() {
    document.getElementById("next-button").disabled = false;
}
disableNextButtonData();
function disableNextButtonData() {
    document.getElementById("next-button").disabled = true;
}

function alerts(icon,message,title)
{
  Swal.fire({
    icon: icon,
    html: message,
    title: title,
    customClass: {
        container: "swal-container",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
        confirmButton: "swal-button", // Add this line for the confirm button
        cancelButton: "swal-button" // Add this line for the cancel button
    },
    target: myContainer,
    didOpen: () => {
        const container = document.querySelector(".swal-container");
        const containerWidth = myContainer.offsetWidth;
        const containerHeight = myContainer.offsetHeight;

        // Change font size based on container size
        if (containerWidth >= 1000 && containerHeight >= 672) {
            container.style.fontSize = "24px";
        } else {
            container.style.fontSize = "16px";
        }

        // Adjust dimensions and position of the Swal container
        container.style.position = "absolute";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.top = "0";
        container.style.left = "0";
        container.style.padding = "0";

    },
    showCloseButton: false, // Disable the close button
    allowOutsideClick: false, // Prevent closing by clicking outside the modal
    allowEscapeKey: false,
  });
}


function tabChange() {
    let NextClass = document.querySelectorAll(".tab-1-disInvert");
    let currentClass = document.querySelectorAll(".tab-1-invert");
    for (let i = 0; i < NextClass.length; i++) {
        NextClass[i].className = "tab-1-invert";
    }
    for (let i = 0; i < currentClass.length; i++) {
        currentClass[i].className = "tab-1-disInvert";
    }
    document.getElementById('tab-1').style.backgroundColor = "#444648";
    document.getElementById('createimg').src = 'create.png';
    document.getElementById('calcimg').src = 'calculator1.png';
    document.getElementById('createimg').style.cursor = 'not-allowed';
    document.getElementById('calcimg').style.cursor = 'pointer';

}

function enableDeleteButtons() {
    deleteButtons.forEach(function (button) {
        button.disabled = false;
    });
}

function disableDeleteButton() {
    deleteButtons.forEach(function (button) {
        button.disabled = true;
    });
}


function drawChart() {
    // Convert data to the correct format
    var formattedData = [];
    formattedData.push(["X", "Y"]); // Initialize data array with header row

    for (var i = 1; i < data.length; i++) {
        var xValue = Number(data[i][0]);
        var yValue = Number(data[i][1]);
        formattedData.push([xValue, yValue]);
    }

    // Check if formattedData array has any data
    var chartData = google.visualization.arrayToDataTable(formattedData);

    var options = {
        legend: { position: "none" },
        hAxis: {
            title: "X",
            minValue: 0,
        },
        vAxis: {
            title: "Y",
            minValue: 0,
        },
        chartArea: { width: "80%", height: "80%" }, // Added to adjust the chart area size
    };

    var chart = new google.visualization.ScatterChart(
        document.getElementById("chart-container")
    );

    chart.draw(chartData, options);

    var GraphContainer = document.getElementById("chart-container");
    google.visualization.errors.removeAll(GraphContainer);


}


function updateTable() {
    let table = document.getElementById("data-table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    if (table.rows.length < 6) {
        enableAddButton();
    }

    deleteButtons = [];

    for (var i = 1; i < data.length; i++) {
        var row = table.insertRow(i);
        var sCell = row.insertCell(0);
        var xCell = row.insertCell(1);
        var yCell = row.insertCell(2);

        var deleteCell = row.insertCell(3);

        sCell.innerHTML = `${i}`;
        xCell.innerHTML = data[i][0];
        yCell.innerHTML = data[i][1];

        var deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
            
            deleteRow(this);
           
        };

        deleteCell.appendChild(deleteButton);
        deleteButtons.push(deleteButton);
    }
}

// compute functions
function updateTableForCompute() {
    var table = document.getElementById("data-table-compute");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    if (table.rows.length < 10) {
        enableAddButton();
    }

    deleteButtons = [];

    for (var i = 1; i < data.length; i++) {
        var row = table.insertRow(i);
        var sCell = row.insertCell(0);
        var xCell = row.insertCell(1);
        var yCell = row.insertCell(2);

        sCell.innerHTML = `${i}`;
        xCell.innerHTML = data[i][0];
        yCell.innerHTML = data[i][1];

    }
}

function disableDeleteButton() {
    for (let index = 0; index < 5; index++) {
        document.getElementsByClassName("delete-button")[index].disabled = true;
    }
}

// roundToTwoDecimalPlaces
function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}




function limitDecimals(event) {
    var input = event.target;
    var value = input.value;

    // Check if there are more than two decimal places
    if (value.indexOf(".") !== -1 && value.split(".")[1].length > 2) {
        // Remove the extra decimal places
        input.value = parseFloat(value).toFixed(2);
    }
}

