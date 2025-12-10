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

var serializedData = localStorage.getItem('objectToPass'); // Retrieve the serialized table data from localStorage
var tableData = JSON.parse(serializedData);
var table = document.getElementById('dataset-table');

for (var i = 0; i < tableData.length; i++) {
    var rowData = tableData[i];
    var row = table.insertRow(i+1);

   for (var columnName in rowData) {
    var cell = row.insertCell();

    cell.textContent = rowData[columnName];
    console.log(cell.textContent)
  }
}

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
                content: "swal-content",
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
        for(j=1;j<6;j++)
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
    alerts1('info','Find Euclidean Distance!!!','Now, click on the highlighted cell of the matrix and enter the Euclidean distance value between the two points.');
    addDistance();
}

var i;   var ji; var flag=true;  var table;var table2; var X2;var X1;
async  function addDistance()
{
    table= document.getElementById('dataSetTable');
    table2= document.getElementById('dataset-table');
    var rowCount = table.rows.length;
    var rowCount2 = table2.rows.length;
    for(i=1;i<rowCount;i++)
{
var row = table.rows[i];
var cells = row.cells;
for(ji=1;ji<rowCount2;)
{
console.log('ji: '+ji)
if(i!=ji && i<ji)
{ 
    if(flag)
    {
        flag=false;
        X1 = table2.rows[i].cells[1].innerText;
        Y1 = table2.rows[i].cells[2].innerText;
        X2 = table2.rows[ji].cells[1].innerText;
        Y2 = table2.rows[ji].cells[2].innerText;
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
    distance(cells,i,ji,X2,X1,Y2,Y1); 
}

}


//Close button add
function distance(cells, i, j, X2, X1, Y2, Y1) {
  Swal.fire({
    html: `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2 style="font-weight: 600; font-size: 1.4em; margin: 0;">
          Please input your calculated value for D.
        </h2>
        <button id="closeBtn"
         style=" background: transparent; border: none; font-size: 20px;font-weight: bold; color: white; background-color: grey;
         cursor: pointer; line-height: 1; height: 30px; width: 30px;border-radius: 50%; position: absolute; right: 10px; top: 10px;
         display: grid; place-items: center; transition: 0.3s ease; margin-bottom: 20px;"
          title="Close">
          &times;
        </button>
      </div>
      <div style="margin-top: 15px;">
        D : √(${X2}-${X1})² + (${Y2}-${Y1})²
      </div>
    `,
    input: "text",
    confirmButtonText: "SUBMIT",
    allowOutsideClick: false,
    target: ".container",
    customClass: {
      container: "swal-container",
      popup: "swal-popup",
      content: "swal-content",
    },

    didOpen: () => {
      // Close (×) button handler
      document.getElementById("closeBtn").addEventListener("click", () => {
        Swal.close();
        console.log("Popup closed by user.");
      });

      const container = document.querySelector(".swal-container");
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Responsive font sizing
      container.style.fontSize =
        containerWidth >= 1000 && containerHeight >= 672 ? "24px" : "16px";
      Object.assign(container.style, {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        padding: "0",
      });
    },

    inputValidator: (value) => {
      if (!value) {
        return "Please provide your calculated D value.";
      } else {
        guessedValue = value;
        sub1 = X2 - X1;
        sub2 = Y2 - Y1;
        add = Math.pow(sub1, 2) + Math.pow(sub2, 2);
        actualDistance = Math.sqrt(add);
        var xx = actualDistance.toFixed(2);

        if (Number(guessedValue) == Number(xx)) {
          if (i != 4 && j != 6) {
            alerts1(
              "success",
              "Correct!",
              "Now click on <b style='color:#004E86'>NEXT</b> highlighted cell."
            );
          } else {
            alerts1(
              "success",
              "Matrix completed!!",
              "Now click on <b style='color:#004E86'>MIN</b> button."
            );
            document.getElementById("min-button").disabled = false;
          }

          cells[j].removeEventListener("click", myFun);
          cells[j].style.border = "1px solid #6EC3FF";
          cells[j].innerText = Number(xx);
          table.rows[j].cells[i].innerText = Number(xx);
          flag = true;
          ji++;
        } else {
          return "Please enter the correct value (up to 2 decimal places).";
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


function insertUniqueElement(array, element) {
    if (!array.includes(element)) {
      array.push(element);
      return true;
    }
    return false;
  }

var row=[];
var cols=[];
function highlights()
{
    var minValueCount=0;
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
   
   // if(row[row.length-1]==i || cols[cols.length-1]==j)
   //     {

   //     }
    //    else
    //    {
            check=insertUniqueElement(row, i);
          //  insertUniqueElement(cols, j);
         // row.push(i);
         if(check==true)
            cols.push(j);
    //    }

col=j;
minValueCount++;
//for(var c = 1; c < colLength; c++)
//{
table.rows[i].cells[j].style.backgroundColor = "#fbf1d3"; //row highlight
table.rows[i].cells[j].style.color = "black";
//}



if(minValueCount>2)
{
    alerts1('info','Ties in the minimum distance!!!',`From the above distance matrix, we can see the minimum distance is ${minValue}.<br>
    <b>NOTE:</b>You can choose any to break the tie, but here we'll merge the first two points from the matrix.<br>Now click on <b style="color:#004E86">MERGE</b> button.`)
}
else{
    alerts1('info','Minimum value',`From the above distance matrix, we can see the distance between point at row ${row[0]} & ${row[1]} is minimum i.e. ${minValue}.<br>Now, click on <b style="color:#004E86">MERGE</b> button.`)
}

/*
for (var a = 1; a < table.rows.length; a++)
{
    table.rows[a].cells[col].style.backgroundColor = "#fbf1d3"; //column highlight
    table.rows[a].cells[col].style.color = "black";
}
*/

}
}
}

document.getElementById("min-button").disabled=true;
document.getElementById("merge-button").disabled=false;
}

var mergeCount=0;var a=[];var points=[];var minDistance=[];
function merge()
{
    
var table = document.getElementById("dataSetTable");
var colLength=table.getElementsByTagName('th').length;
var cluster=document.getElementById('clusters');
x= row[1];x0= row[0];
y0= cols[0];y1= cols[1];
var text1 = table.rows[x0].cells[0].innerText;
var text2 = table.rows[y0].cells[0].innerText;
var str='( '+text1+', '+text2+' )';

var i=mergeCount;
points[i]=str;
minDistance[i]=minValue;

if(str.length==8)
    {
        a[i] = {
            "n": str,
            "d": minValue,
            "c": [
              {
                "n": text1,
                "d": 0,
                "c": []
              },
              {
                "n": text2,
                "d": 0,
                "c": []
                
              }
            ]
          }
    }
else if(str.length>8 && mergeCount==1)
        {
            a[i] = {
                "n": str,
                "d": minValue,
                "c": [
                  a[0],
                  {
                    "n": text2,
                    "d": 0,
                    "c":[]
                  }
                ]
              }
        }

else if(str.length>8 && mergeCount==2)
    {
        if(text2.length==1)
            {
                for(var p=0;p<points.length;p++)
                    {
                        console.log(points[p],text1)
                        if(points[p]==text1)
                            {
                                index=p;
                            }
                    }
                a[i] = {
                    "n": str,
                    "d": minValue,
                    "c": [
                      a[index],
                      {
                        "n": text2,
                        "d": 0,
                        "c":[]
                      }
                    ]
                  }
            }
        else{
            for(var p=0;p<points.length;p++)
                {
                    console.log(points[p],text1)
                    if(points[p]==text1)
                        {
                            index1=p;
                        }
                        if(points[p]==text2)
                            {
                                index2=p;
                            }
                }
            a[i] = {
                "n": str,
                "d": minValue,
                "c": [
                  a[index1],
                  a[index2]
                ]
              }
        }
    }
    else if(str.length>8 && mergeCount==3)
        
        {
            if(text2.length==1)
                {
                    for(var p=0;p<points.length;p++)
                        {
                            console.log(points[p],text1)
                            if(points[p]==text1)
                                {
                                    index=p;
                                }
                        }

                    a[i] = {
                        "n": str,
                        "d": minValue,
                        "c": [
                          a[index],
                          {
                            "n": text2,
                            "d": 0,
                            "c":[]
                          }
                        ]
                      }
                }
            else{
                for(var p=0;p<points.length;p++)
                    {
                        console.log(points[p],text1)
                        if(points[p]==text1)
                            {
                                index1=p;
                            }
                            if(points[p]==text2)
                                {
                                    index2=p;
                                }
                    }

                a[i] = {
                    "n": str,
                    "d": minValue,
                    "c": [
                      a[index1],
                      a[index2]
                    ]
                  }
            }
        }

console.log(a)
table.rows[x0].cells[0].innerHTML=str;
for(var i = 1; i < table.rows.length; i++)
{
    for(var c = 1; c < colLength; c++)
    {
    table.rows[i].cells[c].style.backgroundColor = ""; //row highlight 
    table.rows[i].cells[c].style.color = "black";
    }
    
}

//find max among both rows
for(var c = 1; c < colLength; c++)
{
v1=table.rows[y0].cells[c].innerHTML;
v2=table.rows[x0].cells[c].innerHTML;
console.log(v1,v2)
res=Math.max(v1,v2)
if(x0!=c)
{
    table.rows[x0].cells[c].innerHTML=res;
}
}

//find max among both columns
for(var i = 1; i < table.rows.length; i++)
{
v1=table.rows[i].cells[x0].innerHTML;
v2=table.rows[i].cells[y0].innerHTML;
console.log(v1,v2)
res=Math.max(v1,v2)
if(x0!=i)
{
    table.rows[i].cells[x0].innerHTML=res;
}
}


table.rows[y0].remove();//removing row
for (var i = 0; i < table.rows.length; i++) { //removing column
table.rows[i].deleteCell(y0); 
}

table.rows[0].cells[x0].innerHTML=str; //for column naming
cluster.innerHTML=""
mergeCount++;

//clusters 
for (var i = 1; i < table.rows.length; i++) { 
    cl=table.rows[i].cells[0].innerHTML;
    if(cl.length==1)
    {
        cl= '( '+table.rows[i].cells[0].innerHTML+' )'
    }
    cluster.innerHTML=cluster.innerHTML+' '+cl;
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
    document.getElementById("next-button").disabled=false;

    var serializedData1 = JSON.stringify(str);
    localStorage.setItem('objectToPass2', serializedData1); 

    var serializedData2 = JSON.stringify(a);
    localStorage.setItem('objectToPass1', serializedData2); 

    var serializedData3 = JSON.stringify(points);
    localStorage.setItem('objectToPass3', serializedData3); 

    var serializedData4 = JSON.stringify(minDistance);
    localStorage.setItem('objectToPass4', serializedData4); 


    var serializedData5 = JSON.stringify(tableData);
    localStorage.setItem('objectToPass5', serializedData5);

    alerts1('success','Single Cluster Formed','Now click on <b style="color:#004E86">NEXT</b> button.');
}
}



//calculator
function submitDistance()
{
var x1 = parseFloat(document.getElementById("pointX1").value)
var x2 = parseFloat(document.getElementById("pointX2").value)
var y1 = parseFloat(document.getElementById("pointY1").value)
var y2 = parseFloat(document.getElementById("pointY2").value)

if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2))
    {
        alerts1('warning','Missing','Enter the required values.');
    }
    else
    {
        var sub1=x2-x1
        var sub2=y2-y1
        var x=Math.pow(sub1,2)
        var y=Math.pow(sub2,2)
        var add=x+y;
        var res=(Math.sqrt(add)).toFixed(2);
        console.log('enter else')
        alerts1('success','Distance',`Answer (up to 2 decimal places): ${res}`);
        resetx()
    }

}

function resetx()
{
var x1 = document.getElementById('pointX1');
var x2 = document.getElementById('pointX2');  
var y1 = document.getElementById('pointY1');
var y2 = document.getElementById('pointY2'); 
x1.value=''
x2.value=''
y1.value=''
y2.value=''
x1.style.border=""
x2.style.border=""
y1.style.border=""
y2.style.border=""
}


