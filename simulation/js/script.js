// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//matrix

function alerts1(icon,title,html)
{
Swal.fire({
icon: icon,
title:title,
html: html,
allowOutsideClick: false,
target: '.container',
customClass: {
        container: "swal-container",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal2-content",
    },
    didOpen: () => {
        const container = document.querySelector(".swal-container");
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Change font size based on container size
        if (containerWidth >= 1000 && containerHeight >= 672) {
            container.style.fontSize = "24px";
        } else {
            container.style.fontSize = "16px";
        }
        container.style.position = "absolute";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.top = "0";
        container.style.left = "0";
        container.style.padding = "0";
    }
});
}
function waitforme(millisec) { 
return new Promise(resolve => { 
setTimeout(() => { resolve('') }, millisec); 
}) 
} 
matrix();

function matrix()
{
    var table= document.getElementById('dataSetTable');
    var rowCount = table.rows.length;
    for(i=1;i<rowCount;i++)
    {
        var row = table.rows[i];
        var cells = row.cells;
        for(j=1;j<7;j++)
        {
            if(i==j)
            {
                row.insertCell(j).innerHTML=0
            }
            else
            {
                row.insertCell(j)
            }
        }
    }
    alerts1('info','Find Euclidean Distance!!','Now, click on the highlighted cell of the matrix and enter the Euclidean distance value between the two points.');
    addDistance();
}

var i;   var ji; var flag=true;  var table; var X2;var X1;
async function addDistance()
{
    table= document.getElementById('dataSetTable');
    var rowCount = table.rows.length;
    for(i=1;i<rowCount;i++)
{
var row = table.rows[i];
var cells = row.cells;
for(ji=1;ji<7;)
{
console.log('ji: '+ji)
if(i!=ji && i<ji)
{ 
    if(flag)
    {
        flag=false;
        let text1 = table.rows[0].cells[ji].innerText;
    const myX2 = text1.split("=");
    X2=Number(myX2[1]);
    let text2 = table.rows[i].cells[0].innerText;
    const myX1 = text2.split("=");
    X1=Number(myX1[1]);
    console.log(X2,X1)
    cells[ji].style.border = "2px solid #004E86";
    cells[ji].addEventListener("click", myFun);
    }
  

await waitforme(2000);
}
else{
    flag=true;
   ji++;
}
}

}
}

function myFun()
{
    var row = table.rows[i];
    var cells = row.cells;
    cells[ji].style.border = "1px solid #6EC3FF";
    console.log(cells[ji].innerText);
    if (cells[ji].innerText == "") {
    distance(cells,i,ji,X2,X1); 
}
}

// Close button add 
function distance(cells, i, j, X2, X1) {
  Swal.fire({
    input: "text",
    confirmButtonText: "SUBMIT",
    allowOutsideClick: false,
    html:
      `<div style="position: relative; padding-top: 30px;">
         <button id="closeBtn"
           onclick="Swal.close()" 
           onmouseover="this.style.backgroundColor='#d33';"
           onmouseout="this.style.backgroundColor='grey';"
           style="position: absolute; top: -15px; right: -10px; 
                  width: 32px; height: 32px; border-radius: 50%;
                  background-color: grey; color: white; 
                  border: none; font-size: 22px; font-weight: bold; 
                  cursor: pointer; line-height: 0.9; 
                  display: flex; align-items: center; justify-content: center;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                  transition: background-color 0.3s;">
           ×
         </button>
         <h2 style="font-weight: 600; font-size: 1.4em; margin: 0; text-align:center;">
           Please input your calculated value for D.
         </h2>
         <div style="margin-top: 12px; text-align:center; font-size: 18px;">
           D : √(${X2}-${X1})²
         </div>
       </div>`,
    target: '.container',
    customClass: {
      container: "swal-container",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
    didOpen: () => {
      const container = document.querySelector(".swal-container");
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Responsive font size adjustment
      if (containerWidth >= 1000 && containerHeight >= 672) {
        container.style.fontSize = "24px";
      } else {
        container.style.fontSize = "16px";
      }

      container.style.position = "absolute";
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.top = "0";
      container.style.left = "0";
      container.style.padding = "0";
    },
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Please provide your calculated D value.";
      } else {
        guessedValue = value;
        sub = X2 - X1;
        actualDistance = Math.sqrt(Math.pow(sub, 2));
        var xx = actualDistance;
        if (Number(guessedValue) == Number(xx)) {
          if (i != 5 && j != 7) {
            alerts1('success', 'Correct!', 'Now click on <b style="color:#004E86">NEXT</b> highlighted cell.');
          } else {
            alerts1('success', 'Matrix completed!!', 'Now click on <b style="color:#004E86">MIN</b> button.');
            document.getElementById('min-button').disabled = false;
          }

          cells[j].removeEventListener("click", myFun);
          cells[j].style.border = "1px solid #6EC3FF";
          cells[j].innerText = xx;
          table.rows[j].cells[i].innerText = xx;
          flag = true;
          ji++;
        } else {
          return "Please fill the correct value.";
        }
      }
    },
  });
}

//

var minValue;
function findMin()
{
var table = document.getElementById("dataSetTable");
var colLength=table.getElementsByTagName('th').length;
minValue = Infinity;
console.log('row length:'+table.rows.length)
console.log('col length:'+colLength)
for (var i = 1; i < table.rows.length; i++) { 
for(var j = 1; j < colLength; j++)
{
var cellValue = parseFloat(table.rows[i].cells[j].textContent);
if (!isNaN(cellValue) && cellValue < minValue && cellValue!=0) {
minValue = cellValue;
}
}

}
console.log("Minimum Value: " + minValue);
highlights();
}

var row=[];
var cols=[];
function highlights()
{
var table = document.getElementById("dataSetTable");
var colLength=table.getElementsByTagName('th').length;
var col;
console.log('row length:'+table.rows.length)
console.log('col length:'+colLength)
for (var i = 1; i < table.rows.length; i++) { 
for(var j = 1; j < colLength; j++)
{
if(table.rows[i].cells[j].textContent==minValue)
{   
row.push(i);
cols.push(j);
col=j;
for(var c = 1; c < colLength; c++)
{
    table.rows[i].cells[c].style.backgroundColor = "#fbf1d3"; //row highllight
table.rows[i].cells[c].style.color = "black";
}
alerts1('info','Minimum value',`From the above distance matrix, we can see the distance between points ${row[0]} & ${row[1]} is minimum i.e. ${minValue}.<br>Now click on <b style="color:#004E86">MERGE</b> button.`);
for (var a = 1; a < table.rows.length; a++)
{
    table.rows[a].cells[col].style.backgroundColor = "#fbf1d3"; //column highlight
    table.rows[a].cells[col].style.color = "black";
}
}
}
}

document.getElementById("min-button").disabled=true;
document.getElementById("merge-button").disabled=false;
}

var mergeCount=0;
function merge()
{
var table = document.getElementById("dataSetTable");
var colLength=table.getElementsByTagName('th').length;
var cluster=document.getElementById('clusters');
console.log(colLength);
console.log(row);
console.log(cols);
x= row[1];x0= row[0];
y0= cols[0];y1= cols[1];
const text1 = table.rows[x0].cells[0].innerText.split("=");
a=text1[0];
const text2 = table.rows[x].cells[0].innerText.split("=");
b=text2[0];
table.rows[x0].cells[0].innerHTML= a+', '+b;
for(var c = 1; c < colLength; c++)
{
table.rows[x0].cells[c].style.backgroundColor = ""; //row highllight
table.rows[x0].cells[c].style.color = "black";
}

//find max among both rows
for(var c = 1; c < colLength; c++)
{
v1=table.rows[x].cells[c].innerHTML;
v2=table.rows[x0].cells[c].innerHTML;
console.log(v1,v2)
res=Math.min(v1,v2)
if(x0!=c)
{
    table.rows[x0].cells[c].innerHTML=res;
}
}

//find max among both columns
for(var i = 1; i < table.rows.length; i++)
{
v1=table.rows[i].cells[y0].innerHTML;
v2=table.rows[i].cells[y1].innerHTML;
console.log(v1,v2)
res=Math.min(v1,v2)
if(y1!=i)
{
    table.rows[i].cells[y1].innerHTML=res;
}
}

table.rows[x].remove();//revoming row

for (var i = 0; i < table.rows.length; i++) { //removing column
table.rows[i].deleteCell(y0); 
}

table.rows[0].cells[y1].innerHTML= a+', '+b;
for (var i = 1; i < table.rows.length; i++) { //removing color
table.rows[i].cells[y1].style.backgroundColor = "";
table.rows[i].cells[y1].style.color = "white";
}
mergeCount++;
if(mergeCount==1)
{
    cluster.innerHTML='(42, 43)';
}
else if(mergeCount==2)
{
    cluster.innerHTML='(42, 43) (25, 27)';
}
else if(mergeCount==3)
{
    cluster.innerHTML='(42, 43) ((25, 27), 22)';  
}
else if(mergeCount==4)
{
    cluster.innerHTML='(42, 43) (((25, 27), 22), 18)';
}
else if(mergeCount==5)
{
    cluster.innerHTML='((42, 43), (((25, 27), 22), 18))';
}
document.getElementById("min-button").disabled=false;
document.getElementById("merge-button").disabled=true;
row=[];
cols=[];
var colLength1=table.getElementsByTagName('th').length;
if(table.rows.length>2 &&colLength1>2)
{
    alerts1('success','Matrix updated!!','To find the minimum distance from the updated matrix again click on <b style="color:#004E86">MIN</b> button.');  
}
else{
    
    document.getElementById("min-button").disabled=true;
    document.getElementById("NEXT").disabled=false;
    alerts1('success','Single Cluster Formed','Now click on <b style="color:#004E86">NEXT</b> button.');
}
}



//calculator
function submitDistance()
{
var x1 = parseFloat(document.getElementById("point1").value)
var x2 = parseFloat(document.getElementById("point2").value)

if(isNaN(x1) || isNaN(x2))
    {
        alerts1('warning','Missing','Enter the required values.');
    }

else{
    var sub=x2-x1
    var x=Math.pow(sub,2)
    var res=Math.sqrt(x)
    
    alerts1('success','Distance',`Answer is: ${res}`);
    resetx();
}
}

function resetx()
{
var x1 = document.getElementById('point1');
var x2 = document.getElementById('point2');  
x1.value=''
x2.value=''
x1.style.border=""
x2.style.border=""
}
