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
 
// Get the modal
var modal2 = document.getElementById("imageModal");

// Get the button that opens the modal
var btn = document.querySelector("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal2.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal2.style.display = "none";
}

// Function to handle same cost
function selectImage() {
    
    document.getElementById('drawMST').disabled=true;

    document.getElementById('NEXT').disabled=false;

    var selectedImage = document.querySelector('input[name="image"]:checked');

    if (selectedImage) {
        Swal.fire({
            backdrop:true,
           target: '.container',
           position:'center',
           
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOut'
              },
            html: `Cost of every edge in the MST is ${cost[0]}`,
            imageUrl: selectedImage.value,
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: "Setup",
            });
           closeModal();
           document.getElementById('sketch-holder').style.display="none";
           document.getElementById('canvas2').style.display="block";
           if(selectedImage.value=='images/graph1.png')
           {
            mst1_3_2_4(); 
           }
           else if(selectedImage.value=='images/graph2.png')
           {
            mst3_1_4_2();
           }
           else if(selectedImage.value=='images/graph3.png')
           {
            mst3_4_1_2();
           }
           else if(selectedImage.value=='images/graph4.png')
           {
            mst4_3_2_1();
           }
           else if(selectedImage.value=='images/graph5.png')
           {
            mst3_1_2_4();
           }
           else if(selectedImage.value=='images/graph6.png')
           {
            mst1_2_4_3();
           }
           else if(selectedImage.value=='images/graph7.png')
           {
            mst2_1_3_4();
           }
           else if(selectedImage.value=='images/graph8.png')
           {
            mst1_3_4_2();
           }
           else if(selectedImage.value=='images/graph9.png')
           {
            mst3_1_4_1_2();
           }
           else if(selectedImage.value=='images/graph10.png')
           {
            mst2_4_3_1_4();
           }
           else if(selectedImage.value=='images/graph11.png')
           {
            mst1_3_2_3_4();
           }
           else if(selectedImage.value=='images/graph12.png')
           {
            mst1_2_2_3_2_4();
           }
           else if(selectedImage.value=='images/graph13.png')
           {
            mst1_2_2_3_1_4();
           }
           else if(selectedImage.value=='images/graph14.png')
           {
            mst2_3_1_4_3_4();
           }
           else if(selectedImage.value=='images/graph15.png')
           {
            mst1_3_1_4_2_3();
           }
           else if(selectedImage.value=='images/graph16.png')
           {
            mst2_4_1_4_2_3();
           }
           document.getElementById('resetMST').disabled=false;
    } else {
        alerts('error','First click on the radio button and then click on <b>SUBMIT</b> button.','Select an MST.');
    }
}

function waitforme(millisec) { 
    return new Promise(resolve => { 
    setTimeout(() => { resolve('') }, millisec); 
    }) 
    } 
    

function alerts(icon,html,title)
{
Swal.fire({
icon: icon,
title:title,
html: html,
allowOutsideClick: false,
target: '.container',
customClass: {
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal2-content",
    },
   
});
}
 var controlInp=document.getElementById('control-inp')
 
 function submitNodes()
 {
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    if(controlInp.value=='NULL'){
        alerts('error','Before proceeding, please select the no. of nodes you want in the graph.','Missing value!!');
    }
    if (controlInp.value == "4") {
        document.getElementById('C1').style.display="none";
    document.getElementById('C2').style.display="block";
// Draw vertices
drawnode(ctx,'white','#004E86');
    }


    else if(controlInp.value == "5")
    {
       window.location.href ="divisiveComp.html"
    } 
                 
 }
 
function drawnode(ctx,f1Style,f2Style)
{
    ctx.fillStyle = f1Style;
    ctx.beginPath();
    ctx.arc(150, 30, 15, 0, 2 * Math.PI,); //1
    ctx.fill();
    ctx.fillStyle = f2Style;
    ctx.font = "16px Arial";
    ctx.fillText("1",145,35);
    ctx.stroke();
    
    ctx.fillStyle = f1Style;
    ctx.beginPath();
    ctx.arc(350, 30, 15, 0, 2 * Math.PI); //2
    ctx.fill();
    ctx.fillStyle = f2Style;
    ctx.font = "16px Arial";
    ctx.fillText("2",345,35);
    ctx.stroke();
    
    ctx.fillStyle = f1Style;
    ctx.beginPath();
    ctx.arc(150, 200, 15, 0, 2 * Math.PI); //3
    ctx.fill();
    ctx.fillStyle = f2Style;
    ctx.font = "16px Arial";
    ctx.fillText("3",145,205);
    ctx.stroke();
    
    ctx.fillStyle = f1Style;
    ctx.beginPath();
    ctx.arc(350, 200, 15, 0, 2 * Math.PI); //4
    ctx.fill();
    ctx.fillStyle = f2Style;
    ctx.font = "16px Arial";
    ctx.fillText("4",345,205);
    ctx.stroke();
}
var data = [["S","D"]];
var dataTable=[];

 function submitEdges()
 {
  var sourceValue = parseInt(document.getElementById("source").value);
  var destinationValue = parseInt(document.getElementById("destination").value);
  var costValue = parseInt(document.getElementById("cost").value);

    // Check if the values already exist in the data array
    var isDuplicate = data.some(function (entry) {
      return (
          (entry[0] === (Number(sourceValue)) &&
          entry[1] === (Number(destinationValue))) ||
          (
            entry[1] === (Number(sourceValue)) &&
          entry[0] === (Number(destinationValue))
          )
      );
  });

  if (isNaN(sourceValue) && isNaN(destinationValue) && isNaN(costValue)) {
    alerts('error','First fill all the values and then click on <b style="color:#004E86">SUBMIT</b> button.','Missing Values!');
     return;
}
if (isNaN(sourceValue) && isNaN(destinationValue)) {
    alerts('error','Please enter name for Source and Destination.','Missing Values!');
    return;
}
if (isNaN(sourceValue)) {
    alerts('error','Please input a node name for Source.','Missing Value!');
    return;
}
if (isNaN(destinationValue)) {
    alerts('error','Please input a node name for Destination.','Missing Value!');
    return;
}
if (isNaN(costValue)) {
    alerts('error','Please input a value for edge cost.','Missing Value!');
    return;
}
if (sourceValue==destinationValue) {
    alerts('error','Self-loops are not allowed in a complete graph.<br> Please enter different values for both the source & destination.','Self loop!!!');   
    return;
}
if (sourceValue > 4 || destinationValue > 4) {
    alerts('error','The highest node value is 4.','Invalid Node!');   
    return;
}
if (sourceValue < 1 || destinationValue < 1) {
    alerts('error','We have only four nodes, which are numbered 1, 2, 3, and 4.','Invalid Node!');
    return;
 }

 if ((costValue < 1 || costValue >50)) {
    alerts('error','Please enter a number in a range, i.e., from 1 to 50.','Invalid Input!');
    return;
 }

 if (!isDuplicate) {
    data.push([
        (Number(sourceValue)),
        (Number(destinationValue)),
    ]);

    dataTable.push([
        (Number(sourceValue)),
        (Number(destinationValue)),
        (Number(costValue))
    ]);
} else {
    alerts('error','Duplicate values are not allowed.','Edge already exists!!!');
    return;
}

const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
drawgraph(sourceValue,destinationValue,costValue,ctx);


var resbutton=document.getElementById('resetE')
if(resbutton.disabled==true)
{
  resbutton.disabled=false;
}

document.getElementById("source").value = "";
document.getElementById("destination").value = "";
document.getElementById("cost").value = "";

if (data.length >= 7) {

      document.getElementById('submitE-button').disabled=true;
      alerts('success','Now, click on the <b style="color:#004E86">NEXT</b> button to proceed with the computation.','Graph created!!!')
      document.getElementById('next').disabled=false;
}

 }

function drawgraph(s,d,c,ctx)
{
 if((s==1 && d==2) ||(s==2 && d==1))
 {
 drawE1(c,ctx,'#004E86','#004E86')
 }
 else if((s==1 && d==3) ||(s==3 && d==1))
 {
 drawE2(c,ctx,'#004E86','#004E86')
 }
 else if((s==1 && d==4) ||(s==4 && d==1))
 {
 drawE3(c,ctx,'#004E86','#004E86')
 }
 else if((s==2 && d==4) ||(s==4 && d==2))
 {
 drawE4(c,ctx,'#004E86','#004E86')
 }
 else if((s==2 && d==3) ||(s==3 && d==2))
 {
 drawE5(c,ctx,'#004E86','#004E86')
 }
 else if((s==4 && d==3) ||(s==3 && d==4))
 {
 drawE6(c,ctx,'#004E86','#004E86')
 }
}

function mst3_1_2_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE1(cost[0],ctx2,'#004E86','#004E86');
    drawE2(cost[0],ctx2,'#004E86','#004E86');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-2','1-3','2-4');
}

function mst3_1_4_2()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE3(cost[0],ctx2,'#004E86','#004E86');
    drawE2(cost[0],ctx2,'#004E86','#004E86');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-4','1-3','2-4');
}

function mst3_4_1_2()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE3(cost[0],ctx2,'#004E86','#004E86');//1-4
    drawE6(cost[0],ctx2,'#004E86','#004E86');//3-4
    drawE1(cost[0],ctx2,'#004E86','#004E86');//1-2
    MSTEdge.push('1-4','3-4','1-2');
}

function mst4_3_2_1()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE5(cost[0],ctx2,'#004E86','#004E86');//2-3
    drawE6(cost[0],ctx2,'#004E86','#004E86');//3-4
    drawE1(cost[0],ctx2,'#004E86','#004E86');//1-2
    MSTEdge.push('2-3','3-4','1-2')
}

function mst1_3_2_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE2(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-3','2-3','2-4')
}

function mst1_2_4_3()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE1(cost[0],ctx2,'#004E86','#004E86');
    drawE6(cost[0],ctx2,'#004E86','#004E86');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-2','3-4','2-4')
}

function mst2_1_3_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE1(cost[0],ctx2,'#004E86','#004E86');
    drawE2(cost[0],ctx2,'#004E86','#004E86');
    drawE6(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-2','1-3','3-4')
}

function mst1_3_4_2()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE4(cost[0],ctx2,'#004E86','#004E86');//2-4
    drawE2(cost[0],ctx2,'#004E86','#004E86');//1-3
    drawE6(cost[0],ctx2,'#004E86','#004E86');//3-4
    MSTEdge.push('2-4','1-3','3-4')
}

function mst3_1_4_1_2()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE2(cost[0],ctx2,'#004E86','#004E86');//1-3
    drawE3(cost[0],ctx2,'#004E86','#004E86');//1-4
    drawE1(cost[0],ctx2,'#004E86','#004E86');//1-2
    MSTEdge.push('1-3','1-4','1-2')
}

function mst2_4_3_1_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE3(cost[0],ctx2,'#004E86','#004E86');
    drawE6(cost[0],ctx2,'#004E86','#004E86');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-4','3-4','2-4')
}

function mst1_3_2_3_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE2(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    drawE6(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-3','2-3','3-4')
}

function mst1_2_2_3_2_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE1(cost[0],ctx2,'#004E86','#004E86');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-2','2-4','2-3')
}

function mst1_2_2_3_1_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE1(cost[0],ctx2,'#004E86','#004E86');
    drawE3(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-2','1-3','2-3')
}

function mst2_3_1_4_3_4()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE6(cost[0],ctx2,'#004E86','#004E86');
    drawE3(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('3-4','1-4','2-3')
}

function mst1_3_1_4_2_3()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE2(cost[0],ctx2,'#004E86','#004E86');
    drawE3(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('1-3','1-4','2-3')
}

function mst2_4_1_4_2_3()
{
    drawSameCostMSTNodes();
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    drawE4(cost[0],ctx2,'#004E86','#004E86');
    drawE3(cost[0],ctx2,'#004E86','#004E86');
    drawE5(cost[0],ctx2,'#004E86','#004E86');
    MSTEdge.push('2-4','1-4','2-3')
}

function drawSameCostMSTNodes()
{
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#004E86';
ctx.beginPath();
ctx.arc(150, 30, 15, 0, 2 * Math.PI); //1
ctx.fill();
ctx.fillStyle = "white";
ctx.font = "16px Arial";
ctx.fillText("1",145,35);
ctx.stroke();

ctx.fillStyle = '#004E86';
ctx.beginPath();
ctx.arc(350, 30, 15, 0, 2 * Math.PI); //2
ctx.fill();
ctx.fillStyle = "white";
ctx.font = "16px Arial";
ctx.fillText("2",345,35);
ctx.stroke();

ctx.fillStyle = '#004E86';
ctx.beginPath();
ctx.arc(150, 200, 15, 0, 2 * Math.PI); //3
ctx.fill();
ctx.fillStyle = "white";
ctx.font = "16px Arial";
ctx.fillText("3",145,205);
ctx.stroke();

ctx.fillStyle = '#004E86';
ctx.beginPath();
ctx.arc(350, 200, 15, 0, 2 * Math.PI); //4
ctx.fill();
ctx.fillStyle = "white";
ctx.font = "16px Arial";
ctx.fillText("4",345,205);
ctx.stroke();
}

function drawE1(c,ctx,sStyle,fStyle)
{
    // Draw edges of the graph
    ctx.strokeStyle = sStyle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle=fStyle;
    ctx.moveTo(165, 30); // 1 node
    ctx.lineTo(335, 30); // 1-2 edge
    ctx.fillText(c,250,25); //cost

    ctx.closePath();
    ctx.stroke();
}

function drawE2(c,ctx,sStyle,fStyle)
{
        
    // Draw edges of the graph
    ctx.strokeStyle = sStyle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle=fStyle;
    ctx.moveTo(150, 45); // 1 node
    ctx.lineTo(150, 185); // 1-3 edge
    ctx.fillText(c,130,120); //cost

    ctx.closePath();
    ctx.stroke();
}

function drawE3(c,ctx,sStyle,fStyle)
{
       
    // Draw edges of the graph
    ctx.strokeStyle = sStyle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle=fStyle;
    ctx.moveTo(160, 42); // 1 node
    ctx.lineTo(340, 190); // 1-4 edge
    ctx.fillText(c,220,80); //cost

    ctx.closePath();
    ctx.stroke();
}

function drawE4(c,ctx,sStyle,fStyle)
{
   
    // Draw edges of the graph
    ctx.strokeStyle = sStyle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle=fStyle;
    ctx.moveTo(350, 45); // 2 node
    ctx.lineTo(350, 185); // 2-4 edge
    ctx.fillText(c,360,120); //cost

    ctx.closePath();
    ctx.stroke();
}

function drawE5(c,ctx,sStyle,fStyle)
{
       
    // Draw edges of the graph
    ctx.strokeStyle = sStyle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle=fStyle;
    ctx.moveTo(335, 38); // 2 node
    ctx.lineTo(160, 190); // 2-3 edge
    ctx.fillText(c,220,160); //cost

    ctx.closePath();
    ctx.stroke();
}

function drawE6(c,ctx,sStyle,fStyle)
{
        
    // Draw edges of the graph
    ctx.strokeStyle = sStyle;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle=fStyle;
    ctx.moveTo(165, 200); // 3 node
    ctx.lineTo(335, 200); // 3-4 edge
    ctx.fillText(c,250,194); //cost

    ctx.closePath();
    ctx.stroke();
}

function resetCanva()
{
    document.getElementById('submitE-button').disabled=false;
    document.getElementById('resetE').disabled=true;
    document.getElementById('next').disabled=true;

    const canvas = document.getElementById('canvas'); //clears canva
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 250);

    submitNodes();
    data=[['S','D']]; //empties array
    dataTable=[];
    document.getElementById("source").value='';
    document.getElementById("destination").value='';
    document.getElementById("cost").value='';
}

function nextToCompute()
{
    document.getElementById('Nodes-control').style.display="none"
    document.getElementById('matrix-control').style.display="block"
    document.getElementById('def-div').style.display="none"

    document.getElementById('table-MST').style.display="block"
    document.getElementById('box1').style.height="690px"

    document.getElementById('but').style.display="block"
    document.getElementById('buttons-1').style.display="flex"
    document.getElementById('row-1').style.height="46%"
    matrix();
    tabChange();
}


//computaion  script

var a;var b;var c;var cost=[];
function matrix()
{
    console.log("data table:", dataTable);
    var table= document.getElementById('dataSetTable');
    var rowCount = table.rows.length;
    for(i=1;i<rowCount;i++)
    {
        var row = table.rows[i];
        for(j=1;j<5;j++)
        {
            if(i==j)
            {
                row.insertCell(j).innerHTML=0;
            }
            else if(i<j)
            { 
                if(i==1)
                {
                    for(a=0;a<=dataTable.length;)
                    {
                        
                        if(((dataTable[a][0]==i && dataTable[a][1]==j) || (dataTable[a][1]==i && dataTable[a][0]==j)))
                        {
                            row.insertCell(j).innerHTML=dataTable[a][2];
                            a++;
                            break;
                        }
                        else{
                            a++;
                        }
                    }   
                }
               else if(i==2)
               {
                for(b=0;b<=dataTable.length;)
                    {

                        if(((dataTable[b][0]==i  && dataTable[b][1]==j ) || (dataTable[b][1]==i && dataTable[b][0]==j)))
                        {
                            row.insertCell(j).innerHTML=dataTable[b][2];
                            b++;
                            break;
                        }
                        else{
                            b++;
                        }
                    }
               }
               else if(i==3)
               {
                for(c=0;c<=dataTable.length;)
                {
                    if(((dataTable[c][0]==i && dataTable[c][1]==j) ||(dataTable[c][1]==i && dataTable[c][0]==j)))
                    {
                        row.insertCell(j).innerHTML=dataTable[c][2];
                        c++;
                        break;
                    }
                    else{
                        c++;
                    }
                }
               }
               else if(i==4)
               {
               //
               }
              
            }

            else{
                row.insertCell(j)
            }
        }
    }

    // Deep copy the array
var newArray = dataTable.map(function(row) {
    return row.slice();
});


// Sort the array based on the third element in each row
newArray.sort(function(a, b) {
    return a[2] - b[2];
});

// Log the sorted array
console.log(newArray);
var table=document.getElementById('arranged-table')
var rowCount = table.rows.length;
for(index=0;index<newArray.length;index++)
{
    var row = table.rows[index+1];
    var cells = row.cells;
    if(newArray[index][0]<newArray[index][1])
    {
        cells[1].innerText=newArray[index][0]+'-'+newArray[index][1];
    }
    else{
        cells[1].innerText=newArray[index][1]+'-'+newArray[index][0];
    }
    cells[2].innerText=newArray[index][2];
}

for(index=0;index<newArray.length;index++)
{
cost.push(newArray[index][2]);
}
edgesCost();
}

function tabChange()
{
    var create=document.getElementById('tab-1')
    create.style.backgroundColor = "#004E86";
    document.getElementById('create-text').style.color = "#FFC000";
    document.getElementById('createImg').src='images/create.png';

    var crCreate=document.getElementById('create-create');
    crCreate.style.color = "#FFC000";
    crCreate.style.backgroundColor = "#004E86";

    var compute=document.getElementById('tab-2')
    compute.style.color = "#004E86";
    compute.style.backgroundColor = "#ffd964";
    document.getElementById('calImg').src='images/calculator1.png';
    modal.style.height='670px';

}

var table=document.getElementById('arranged-table');
var edge=[]
var result;
function drawMST()
{
    //check if all cost are same
function areAllElementsSame(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return true;
    }

    // Compare each element with the first one
    return arr.every(element => element === arr[0]);
}

result = areAllElementsSame(cost);

if (result) {
    console.log("All elements in the array have the same value.");
    openModal();
} else {
    console.log("Not all elements in the array have the same value.");
    document.getElementById('drawMST').disabled=true;
    minEdge('Pick Edge!!','Enter the edge name from the sorted list of edge.<br> For example, 1-2');
}

var rowCount = table.rows.length;
for(index=1;index<rowCount;index++)
{
    var row = table.rows[index];
    var cells = row.cells;
    edge.push(cells[1].innerHTML)
}
console.log(edge)
}

var count=0;; var e=0;
var MSTEdge=[];var MSTCost=[];

//min edge
function minEdge(title,html)
{
    Swal.fire({
        title: title,
        input: "text",
        confirmButtonText: "SUBMIT",
        target: '.sub-div-create-graphs',
        allowOutsideClick: false,
        html:html,
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal2-content",
        },
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const popup = document.querySelector(".swal-popup");
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
            popup.style.marginTop = "60px";
            popup.style.marginLeft = "390px";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";
        },
       
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Please provide your value.";
          } else {
            
            if (value == edge[e]) {
                if(count==2)
                {
                    if(((edge[0]=='1-2'|| edge[0]=='1-3'||edge[0]=='2-3') && (edge[1]=='1-3'|| edge[1]=='1-2'||edge[1]=='2-3') && (edge[2]=='2-3'|| edge[2]=='1-3'||edge[2]=='1-2')) ||
                    ((edge[0]=='2-3'|| edge[0]=='2-4'||edge[0]=='3-4') && (edge[1]=='2-3'|| edge[1]=='2-4'||edge[1]=='3-4') && (edge[2]=='2-3'|| edge[2]=='2-4'||edge[2]=='3-4')) ||
                    ((edge[0]=='1-3'|| edge[0]=='1-4'||edge[0]=='3-4') && (edge[1]=='1-3'|| edge[1]=='1-4'||edge[1]=='3-4') && (edge[2]=='1-3'|| edge[2]=='1-4'||edge[2]=='3-4'))||
                    ((edge[0]=='1-2'|| edge[0]=='2-4'||edge[0]=='1-4') && (edge[1]=='1-2'|| edge[1]=='2-4'||edge[1]=='1-4') && (edge[2]=='1-2'|| edge[2]=='2-4'||edge[2]=='1-4')))
                    {
                        Swal.fire({
                            icon:'error',
                            title: "Cycle detected!",
                            html:"Since including this edge will results in the cycle, discard it and <br> pick <b style='color:#004E86'>NEXT</b> edge from the table.",
                            confirmButtonText: "SUBMIT",
                            target: '.container',
                            allowOutsideClick: false,
                            customClass: {
                                container: "swal-container",
                                popup: "swal-popup",
                                title: "swal-title",
                                content: "swal2-content",
                            },
                           
                            showCancelButton: false})
                        .then((result) => {
                            if (result.isConfirmed) {
                                count++;
                                e++;
                                minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
                            } 
                        })
                    }
                    else{
                        Swal.fire({
                            icon:'success',
                            title: "No cycle is formed!",
                            confirmButtonText: "SUBMIT",
                            target: '.container',
                            allowOutsideClick: false,
                            customClass: {
                                container: "swal-container",
                                popup: "swal-popup",
                                title: "swal-title",
                                content: "swal2-content",
                            },
                           
                            showCancelButton: false})
                        .then((result) => {
                            if (result.isConfirmed) {
                                if(value=='1-2')
                                {
                                    cnt1_2++;
                                }
                                else if(value=='1-3')
                                {
                                    cnt1_3++;
                                }
                                else if(value=='1-4')
                                {
                                    cnt1_4++;
                                }
                                else if(value=='2-3')
                                {
                                    cnt2_3++;
                                }
                                else if(value=='2-4')
                                {
                                    cnt2_4++;
                                }
                                else if(value=='3-4')
                                {
                                    cnt3_4++;
                                }
                                edgeCount++;
                                count++;
                                e++;
                                MSTEdge.push(table.rows[count].cells[1].innerHTML);
                                MSTCost.push(table.rows[count].cells[2].innerHTML);
                                table.rows[count].style.backgroundColor = "rgb(255 244 210)";
                                table.rows[count].style.color = "black";
                            } 
                        })
                    }
                }
                else{
                    Swal.fire({
                        icon:'success',
                        title: "No cycle is formed!",
                        confirmButtonText: "SUBMIT",
                        target: '.container',
                        allowOutsideClick: false,
                        customClass: {
                            container: "swal-container",
                            popup: "swal-popup",
                            title: "swal-title",
                            content: "swal2-content",
                        },
                       
                        showCancelButton: false})
                    .then((result) => {
                        if (result.isConfirmed) {
                            if(value=='1-2')
                                {
                                    cnt1_2++;
                                }
                                else if(value=='1-3')
                                {
                                    cnt1_3++;
                                }
                                else if(value=='1-4')
                                {
                                    cnt1_4++;
                                }
                                else if(value=='2-3')
                                {
                                    cnt2_3++;
                                }
                                else if(value=='2-4')
                                {
                                    cnt2_4++;
                                }
                                else if(value=='3-4')
                                {
                                    cnt3_4++;
                                }
                                edgeCount++;
                            count++;
                             e++;
                             MSTEdge.push(table.rows[count].cells[1].innerHTML);
                            MSTCost.push(table.rows[count].cells[2].innerHTML);
                             table.rows[count].style.backgroundColor = "rgb(255 244 210)";
                             table.rows[count].style.color = "black";
                        } 
                    })
                }
                    
            
            } else {
              return "Please fill the correct value.";
            }
          }
        },
      });

      var resbutton=document.getElementById('resetMST')
if(resbutton.disabled==true)
{
  resbutton.disabled=false;
}

}

var E1_2;var E1_3;var E1_4;var E2_3;var E2_4;var E3_4;
function edgesCost()
{
    var table=document.getElementById('arranged-table')
    var rowCount = table.rows.length;
for(index=1;index<rowCount;index++)
{
    var row = table.rows[index];
    var cells = row.cells;
    if(cells[1].innerHTML=='1-2')
    {
        E1_2=cells[2].innerHTML;
    }
    else if(cells[1].innerHTML=='1-3')
    {
        E1_3=cells[2].innerHTML;
    }
    else if(cells[1].innerHTML=='1-4')
    {
        E1_4=cells[2].innerHTML;
    }
    else if(cells[1].innerHTML=='2-3')
    {
        E2_3=cells[2].innerHTML;
    }
    else if(cells[1].innerHTML=='2-4')
    {
        E2_4=cells[2].innerHTML;
    }
    else if(cells[1].innerHTML=='3-4')
    {
        E3_4=cells[2].innerHTML;
    }
}

}


//spanning tree animation
var ctn1=0;var x1_2=160;var y1_2=30;var X1_2;
var x1_3=150;var y1_3=45;var Y1_3;
var x3_4=165;var y3_4=200;var X3_4;
var x2_4=350;var y2_4=45;var y2_4;
var x1_4=160;var y1_4=40;var X1_4;var Y1_4;
var x2_3=340;var y2_3=40;var X2_3;var Y2_3;

function setup() {
    let canvas=createCanvas(500, 242);
    canvas.parent('sketch-holder');

    canvas.style('border-radius', '10px'); // Adjust the border radius as needed

    X1_2 = 0.85;

    Y1_3=.7;

    X3_4=.85;

    Y2_4=.7;

    X1_4=.875;
    Y1_4=.775;

    X2_3=.875;
    Y2_3=.775;
}

function coloursc1() {
    stroke('#004E86');
    strokeWeight(2)
    fill('white');
    ellipse(150, 30, 25, 25);
    fill('black');
    textSize(16);
    text('1', 145, 35);
}

function coloursc2() {
    stroke('#004E86');
    strokeWeight(2)
    fill('white');
    ellipse(350, 30, 25, 25);
    fill('black');
    textSize(16);
    text('2', 345, 35);
}

function coloursc3() {
    stroke('#004E86');
    strokeWeight(2)
    fill('white');
    ellipse(150, 200, 25, 25);
    fill('black');
    textSize(16);
    text('3', 145, 205);
}

function coloursc4() {
    stroke('#004E86');
    strokeWeight(2)
    fill('white');
    ellipse(350, 200, 25, 25);
    fill('black');
    textSize(18);
    text('4', 345, 205);
}


function changeColor(x1,y1,x2,y2,t) {
    stroke('#004E86');
    fill('#004E86');
    ellipse(x1,y1,x2,y2);
    fill('white');
    textSize(16);
    text(t, x1-5, y1+5);
}

function drawline(x1,y1,x2,y2)
{
    strokeWeight(3);
    stroke('#004E86');
    line(x1,y1,x2,y2)
}

function drawline1(x1,y1,x2,y2)
{
    strokeWeight(3);
    stroke('#6EC3FF');
    line(x1,y1,x2,y2)
}

function line1_2()
{
    drawline(165,30,335,30);
    strokeWeight(1);
    stroke('#004E86')
    fill('#004E86');
    textSize(12);
    text(E1_2, 250, 25);
    changeColor(150, 30, 25, 25,1);
    changeColor(350, 30, 25, 25,2);
} 

function line1_3()
{
    drawline(150,45,150,185);
    strokeWeight(1);
    stroke('#004E86')
    fill('#004E86');
    textSize(12);
    text(E1_3, 130, 120);
    changeColor(150, 30, 25, 25,1);
    changeColor(150, 200, 25, 25,3);
}

function line1_4()
{
    drawline(150,30,345,190);
    strokeWeight(1);
    stroke('#004E86')
    fill('#004E86');
    textSize(12);
    text(E1_4, 225, 80);
    changeColor(150, 30, 25, 25,1);
    changeColor(350, 200, 25, 25,4);
}

function line2_3()
{
    drawline(350,30,155,190);
    strokeWeight(1);
    stroke('#004E86')
    fill('#004E86');
    textSize(12);
    text(E2_3, 230, 145);
    changeColor(350, 30, 25, 25,2);
    changeColor(150, 200, 25, 25,3);
}

function line2_4()
{
    drawline(350,45,350,185);
    strokeWeight(1);
    stroke('#004E86')
    fill('#004E86');
    textSize(12);
    text(E2_4, 358, 120);
    changeColor(350, 30, 25, 25,2);
    changeColor(350, 200, 25, 25,4);
}

function line3_4()
{
    drawline(165,200,335,200);
    strokeWeight(1);
    stroke('#004E86')
    fill('#004E86');
    textSize(12);
    text(E3_4, 250, 195);
    changeColor(350, 200, 25, 25,4);
    changeColor(150, 200, 25, 25,3);
}

function redrawLine()
{
    if(cnt1_2==2)
    {
        line1_2();
    }
    if(cnt1_3==2)
    {
        line1_3();
    }
    if(cnt1_4==2)
    {
        line1_4();
    }
    if(cnt2_3==2)
    {
        line2_3();
    }
    if(cnt2_4==2)
    {
        line2_4();
    }
    if(cnt3_4==2)
    {
        line3_4();
    }
}

var cnt1_2=0;var cnt1_3=0;var cnt1_4=0;var cnt2_3=0;var cnt2_4=0;var cnt3_4=0;
var flag1_2=true;var flag1_3=true;var flag1_4=true;var flag2_4=true;var flag2_3=true;var flag3_4=true;
var edgeCount=0;

function draw() {
    
    background(color('#FFFFFF'));

    coloursc1();
    coloursc2();
    coloursc3();
    coloursc4();
    redrawLine();

  strokeWeight(3);
  stroke('white');
 
  //line 1-2
  if(cnt1_2==1)
  {

    drawline1(165,30,335,30);
    stroke('#004E86');
    x1_2=x1_2+X1_2;
    if (x1_2 <= 335) {
        line(x1_2, y1_2, 335, 30); //for 1    
    }
    if(x1_2>=335)
    { 
     line1_2();
     if(flag1_2==true)
     {
        if(edgeCount==3)
        {
            document.getElementById('NEXT').disabled=false;
            alerts('success','Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.<br>Now click on the <b style="color:#004E86">NEXT</b> button.','MST created!!');
            
        }
     else{
        minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
     }
        flag1_2=false;
        cnt1_2++;
     }
    
    }
  }
  
  //line 1-3
if(cnt1_3==1)
{
    drawline1(150,45,150,185);
    strokeWeight(3);
    stroke('#004E86');
    y1_3=y1_3+Y1_3
    if (y1_3 <= 185) {
        line(x1_3, y1_3, 150, 185); //for 1-3
        
    }
    if(y1_3 >= 185)
    {
        line1_3();
        if(flag1_3==true)
        {
            if(edgeCount==3)
            {
                document.getElementById('NEXT').disabled=false;
                alerts('success','Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.<br>Now click on the <b style="color:#004E86">NEXT</b> button.','MST created!!');
            }
         else{
            minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
         }
           flag1_3=false;
           cnt1_3++;
        }
    }
}

//line 1-4
if(cnt1_4==1)
{
    drawline1(160,40,335,195);
   // redrawLine();
    strokeWeight(3);
    stroke('#004E86');
    x1_4=x1_4+X1_4;
    y1_4=y1_4+Y1_4;
    if (y1_4 <= 195) {
       line(x1_4, y1_4, 335,195); //for 1
        
    }
    if(y1_4>=195)
    {
        line1_4();
        if(flag1_4==true)
        {
            if(edgeCount==3)
            {
                document.getElementById('NEXT').disabled=false;
                alerts('success','Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.<br>Now click on the <b style="color:#004E86">NEXT</b> button.','MST created!!');
            }
         else{
            minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
         }
           flag1_4=false;
           cnt1_4++;
        }
       
    }
}

//line 3-4
if(cnt3_4==1)
    {
        drawline1(165,200,335,200);
        strokeWeight(3);
        stroke('#004E86');
        x3_4=x3_4+X3_4;
        if (x3_4 <= 335) {
            line(x3_4, y3_4, 335, 200); //for 3-4
            
        }
        if(x3_4 >= 335)
        {
            line3_4();
            if(flag3_4==true)
     {
        if(edgeCount==3)
        {
            document.getElementById('NEXT').disabled=false;
            alerts('success','Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.<br>Now click on the <b style="color:#004E86">NEXT</b> button.','MST created!!');
        }
     else{
        minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
     }
        flag3_4=false;
        cnt3_4++;
     }
        }
    }
    
//line 2-4
if(cnt2_4==1)
{
    drawline1(350,45,350,185);
    strokeWeight(3);
    stroke('#004E86');
    y2_4=y2_4+Y2_4;
    if (y2_4 <= 185) {
       line(x2_4, y2_4, 350, 185); //for 1
        
    }
    if(y2_4>=185)
    {
        line2_4();
        if(flag2_4==true)
        {
            if(edgeCount==3)
            {
                document.getElementById('NEXT').disabled=false;
                alerts('success','Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.<br>Now click on the <b style="color:#004E86">NEXT</b> button.','MST created!!');
            }
         else{
            minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
         }
           flag2_4=false;
           cnt2_4++;
        }
       
    }
}

//line 2-3
if(cnt2_3==1)
{
    drawline1(340,40,165,195);
    strokeWeight(3);
    stroke('#004E86');
    x2_3=x2_3-X2_3;
    y2_3=y2_3+Y2_3;
    if (y2_3 <= 195) {
       line(x2_3, y2_3, 165, 195); //for 1
        
    }
    if(y2_3>=195)
    {
        line2_3();
        if(flag2_3==true)
        {
            if(edgeCount==3)
            {
                document.getElementById('NEXT').disabled=false;
                alerts('success','Since the number of edges included in the MST equals to (V – 1), so the algorithm stops here.<br>Now click on the <b style="color:#004E86">NEXT</b> button.','MST created!!');
            }
         else{
            minEdge('Pick Edge!!','Enter the <b style="color:#004E86">NEXT</b> edge name from the sorted list of edge.<br> For example, 1-2');
         }
           flag2_3=false;
           cnt2_3++;
        }
       
    }
}


};

function resetMST()
{
   

 document.getElementById('resetMST').disabled=true;
 document.getElementById('drawMST').disabled=false;
 document.getElementById('NEXT').disabled=true;
 if(result)
 {
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    console.log(selectedImage.value);
    document.querySelector('input[name="image"]:checked').checked = false;
 }
 else{
    clear();
    cnt1_2=0; cnt1_3=0; cnt1_4=0; cnt2_3=0; cnt2_4=0; cnt3_4=0;
    flag1_2=true; flag1_3=true;flag1_4=true;flag2_4=true; flag2_3=true; flag3_4=true;
    X1_2 = 0.85;Y1_3=.7;X3_4=.85; Y2_4=.7; X1_4=.875;Y1_4=.775;X2_3=.875;Y2_3=.775;
    ctn1=0;x1_2=160; y1_2=30; X1_2;
    x1_3=150; y1_3=45;
    x3_4=165; y3_4=200;
    x2_4=350; y2_4=45;
    x1_4=160; y1_4=40;
    x2_3=340; y2_3=40;

    
    edgeCount=0;
    count=0; e=0;MSTCost=[];MSTEdge=[];
    for(i=1;i<table.rows.length;i++)
    {
       table.rows[i].style.backgroundColor = "";
       table.rows[i].style.color = "white";
    }
 }

 alerts('info','Click on the <b style="color:#004E86">DRAW MST</b> button.','Recreate the MST!!')
}

function next()
{
    document.getElementById('nextContainer1').style.display="none";
    document.getElementById('nextContainer2').style.display="block";
    canva2();
}

function canva2()
{
const newCanvas = document.getElementById('canvasMST');
const ctx = newCanvas.getContext('2d');

if (result) {
// Get the original canvas element
var originalCanvas = document.getElementById('canvas2');

// Set the dimensions of the new canvas to match the original canvas
newCanvas.width = originalCanvas.width;
newCanvas.height = originalCanvas.height;

// Draw the content of the original canvas onto the new canvas
ctx.drawImage(originalCanvas, 0, 0);

var table=document.getElementById('MST-table');
var rowCount = table.rows.length;
var j=0;
for(i=1;i<rowCount;i++)
{
    var row = table.rows[i];
    var cells = row.cells;
    cells[1].innerHTML=MSTEdge[j];
    cells[2].innerHTML=cost[0];
    j++;
}

}
else{

var table=document.getElementById('MST-table');
var rowCount = table.rows.length;
var j=0;
for(i=1;i<rowCount;i++)
{
    var row = table.rows[i];
    var cells = row.cells;
    cells[1].innerHTML=MSTEdge[j];
    cells[2].innerHTML=MSTCost[j];
    j++;
}

//var c=document.getElementById("sketch-holder");

let name = document.getElementById("sketch-holder").firstElementChild.id;
var originalCanvas=document.getElementById(name);
console.log(originalCanvas.width)
console.log(originalCanvas.height)

// Set the fixed size for the new canvas
const fixedWidth = 500;
const fixedHeight = 242;

// Calculate the aspect ratio of the original sketch
const originalAspectRatio = originalCanvas.width / originalCanvas.height;

// Calculate the new height based on the fixed width and the original aspect ratio
const newHeight = fixedWidth / originalAspectRatio;

// Create a new canvas with the fixed size
newCanvas.width = fixedWidth; 
newCanvas.height = newHeight;

// Copy the content of the original canvas to the new canvas

ctx.drawImage(originalCanvas, 0, 0, fixedWidth, fixedHeight);
console.log('doneee')
}

}

var enterEdgeCount=0;
function enteredge()
{
    enterEdgeCount++;
    document.getElementById('start2').disabled=true;
    if(enterEdgeCount==1)
    {
        breakEdge('Break Edge!!','Enter the source, destination node which has highest edge cost.for e.g 1-4');
    }
    else if(enterEdgeCount==2)
    {
        breakEdge('Again Break Edge!!','Enter the <b>NEXT</b> source, destination node which has highest edge cost. for e.g 1-4')
    }
    else if(enterEdgeCount==3)
    {
        breakEdge('Again Break Edge!!','Enter the <b>NEXT</b> source, destination node which has highest edge cost. for e.g 1-4')
    }
    
    
}

var indexEdge=0;
var arrayIndex=2;
function breakEdge(title,html)
{
    Swal.fire({
        title: title,
        input: "text",
        confirmButtonText: "SUBMIT",
        target: '.container',
        allowOutsideClick: false,
        html:html,
        customClass: {
            container: "swal-container1",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal2-content",
        },
        didOpen: () => {
            const container = document.querySelector(".swal-container1");
            const popup = document.querySelector(".swal-popup");
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
            popup.style.marginTop = "320px";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";
        },
       
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Please provide your value.";
          } else {
            if (value == MSTEdge[arrayIndex]) {
                    Swal.fire({
                    icon:'success',
                    title: "Clusters formed!!",
                    confirmButtonText: "SUBMIT",
                    target: '.container',
                    allowOutsideClick: false,
                    customClass: {
                        container: "position-absolute",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal2-content",
                    },
                   
                    showCancelButton: false})
                .then((result) => {
                    if (result.isConfirmed) {
                        if(indexEdge==0)
                        {
                            document.getElementById('graph2-control').style.display="block";
                            canva3();
                        }
                        if(indexEdge==1)
                        {
                            document.getElementById('graph3-control').style.display="block";
                            canva4();
                        }
                        if(indexEdge==2)
                        {
                            document.getElementById('graph4-control').style.display="block";
                            canva5();
                        }

                        indexEdge++;arrayIndex--;
                        document.getElementById('start2').disabled=false;
                    } 
                })
            
            } else {
              return "Please enter the correct value of EDGE from the given table.";
            }
          }
        },
      });
}

var arrayNodes=[1,2,3,4];var value1;var value2;var newArray=[];var newArray2=[];
//graphs
function canva3()
{
    const canvas = document.getElementById('canvas3');
const ctx = canvas.getContext('2d');

// Draw edges of the graph
for(i=0;i<2;i++)
{
    edge=MSTEdge[i]
    cost=MSTCost[i]
    if(edge=='1-2')
    {
       Cline1_2(ctx,cost);
    }
    else if(edge=='1-3')
    {
        Cline1_3(ctx,cost);
    }
    else if(edge=='1-4')
    {
        Cline1_4(ctx,cost);
    }
    else if(edge=='2-3')
    {
        Cline2_3(ctx,cost);
    }
    else if(edge=='2-4')
    {
        Cline2_4(ctx,cost);
    }
    else if(edge=='3-4')
    {
        Cline3_4(ctx,cost);
    }
}

// Draw vertices
drawVertex(ctx);

//making clusters
document.getElementById('cluster-id').style.display="block";
var clus=document.getElementById('cluster-id');

for(i=0;i<2;i++)
{
    v=MSTEdge[i].split("-")
newArray.push(v[0]);
newArray.push(v[1]);
}

let uniqueArray = [...new Set(newArray)];
const cluster=MSTEdge[2].split("-")
value1=cluster[0]
console.log(uniqueArray.includes(value1));

if(uniqueArray.includes(cluster[0]) && uniqueArray.includes(cluster[1]))
{
    clus.innerHTML="Two clusters get formed: {"+uniqueArray[0]+', '+uniqueArray[1]+'} & {'+uniqueArray[2]+', '+uniqueArray[4]+'}';
}
else if(!uniqueArray.includes(value1))
{
    clus.innerHTML="Two clusters get formed: {"+uniqueArray[0]+', '+uniqueArray[1]+', '+uniqueArray[2]+'} & {'+value1+'}';
}
else{
    value1=cluster[1]
    const index = arrayNodes.indexOf(Number(value1));
    if (index > -1) { // only splice array when item is found
        arrayNodes.splice(index, 1); // 2nd parameter means remove one item only
    }
       
    clus.innerHTML="Two clusters get formed: {"+arrayNodes[0]+', '+arrayNodes[1]+', '+arrayNodes[2]+'} & {'+value1+'}';
}


}

function canva4()
{
const canvas = document.getElementById('canvas4');
const ctx = canvas.getContext('2d');


// Draw edges of the graph
for(i=0;i<1;i++)
{
    edge=MSTEdge[i]
    cost=MSTCost[i]
    if(edge=='1-2')
    {
       Cline1_2(ctx,cost);
    }
    else if(edge=='1-3')
    {
        Cline1_3(ctx,cost);
    }
    else if(edge=='1-4')
    {
        Cline1_4(ctx,cost);
    }
    else if(edge=='2-3')
    {
        Cline2_3(ctx,cost);
    }
    else if(edge=='2-4')
    {
        Cline2_4(ctx,cost);
    }
    else if(edge=='3-4')
    {
        Cline3_4(ctx,cost);
    }
}
// Draw vertices
drawVertex(ctx);

//making clusters
document.getElementById('cluster-id').style.display="block";
var clus=document.getElementById('cluster-id');

for(i=0;i<1;i++)
{
    v=MSTEdge[i].split("-")
newArray2.push(v[0]);
newArray2.push(v[1]);
}

let uniqueArray = [...new Set(newArray2)];
const cluster=MSTEdge[1].split("-")
value2=cluster[0]
console.log(uniqueArray.includes(value2));
if(!uniqueArray.includes(value2))
{
    clus.innerHTML="Three clusters get formed: {"+newArray2[0]+', '+newArray2[1]+'}, {'+value1+'} & {'+value2+'}';
}
else{
    value2=cluster[1]
    const index = arrayNodes.indexOf(Number(value2));
    if (index > -1) { // only splice array when item is found
        arrayNodes.splice(index, 1); // 2nd parameter means remove one item only
    }   
    const index2 = arrayNodes.indexOf(Number(value1));
    if (index2 > -1) { // only splice array when item is found
        arrayNodes.splice(index2, 1); // 2nd parameter means remove one item only
    }   
    clus.innerHTML="Three clusters get formed: {"+arrayNodes[0]+', '+arrayNodes[1]+'}, {'+value1+'} & {'+value2+'}';
}


}

async function canva5()
{
const canvas = document.getElementById('canvas5');
const ctx = canvas.getContext('2d');

// Draw vertices
drawVertex(ctx);
drawEllipse4(ctx);
}

function drawVertex(ctx)
{
    ctx.setLineDash([]);

    ctx.strokeStyle = '#004E86';
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(50, 30, 10, 0, 2 * Math.PI); //1
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("1",45,35);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(215, 30, 10, 0, 2 * Math.PI); //2
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("2",210,35);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(50, 160, 10, 0, 2 * Math.PI); //3
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("3",45,165);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(215, 160, 10, 0, 2 * Math.PI); //4
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("4",210,165);
    ctx.stroke();
}
function Cline1_2(ctx,c)
{
    ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";
    ctx.moveTo(50, 30);
    ctx.lineTo(215, 30); // 1-2 edge
    ctx.fillText(c,130,25); //cost
    ctx.closePath();
ctx.stroke();
}
function Cline1_3(ctx,c)
{
    ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";
    ctx.moveTo(50, 30);
    ctx.lineTo(50, 160); // 1-3 edge
    ctx.fillText(c,25,100); //cost
    ctx.closePath();
ctx.stroke();
}
function Cline1_4(ctx,c)
{ 
    ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";
ctx.moveTo(50, 30);
ctx.lineTo(215, 160); // 1-4 edge
ctx.fillText(c,105,70); //cost
ctx.closePath();
ctx.stroke();
}
function Cline2_3(ctx,c)
{ 
    ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";
    ctx.moveTo(215, 30); // 2 node
    ctx.lineTo(50, 160); // 2-3 edge
    ctx.fillText(c,150,70); //costt
    ctx.closePath();
ctx.stroke();
}
function Cline2_4(ctx,c)
{ 
    ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";
    ctx.moveTo(215, 30); // 2 node
    ctx.lineTo(215, 160); // 2-4 edge
    ctx.fillText(c,225,80); //cost
    ctx.closePath();
ctx.stroke();
}
function Cline3_4(ctx,c)
{ 
    ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";
    ctx.moveTo(50, 160); // 3 node
    ctx.lineTo(215, 160); // 3-4 edge
    ctx.fillText(c,130,155); //cost
    ctx.closePath();
ctx.stroke();
}


async function drawEllipse4(ctx)
{

    
    if (ctx.setLineDash !== undefined) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#6EC3FF';
        ctx.setLineDash([5, 10]);
      }


    ctx.beginPath();
    ctx.arc(50, 30, 20, 0, 2 * Math.PI); //1
    ctx.closePath();
    ctx.stroke();

   ctx.beginPath();
   ctx.arc(215, 30, 20, 0, 2 * Math.PI); //2
   ctx.closePath();
   ctx.stroke();

    ctx.beginPath();
    ctx.arc(215, 160, 20, 0, 2 * Math.PI); //4
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 160, 20, 0, 2 * Math.PI); //3
    ctx.closePath();
    ctx.stroke();

    var clus=document.getElementById('cluster-id');
    clus.innerHTML="Four clusters get formed: {1} ,{2}, {3}, and {4}";
    await waitforme(1200);
    alerts('success','Now click on the <b style="color:#004E86">NEXT</b> button.','Singleton Clusters Formed!!!');
    document.getElementById('NEXT2').disabled=false;
    document.getElementById('start2').disabled=true;
}

function resetEdgeBreaker()
{
    document.getElementById('cluster-id').style.display="none";
    indexEdge=0;arrayIndex=2;
    document.getElementById('graph2-control').style.display="none";
    document.getElementById('graph3-control').style.display="none";
    document.getElementById('graph4-control').style.display="none";
    next();
    document.getElementById('start2').disabled=false;
    document.getElementById('NEXT2').disabled=true;
    newArray=[];newArray2=[];arrayNodes=[1,2,3,4];
    enterEdgeCount=0;
    for(i=3;i<6;i++)
    {
        id='canvas'+i;
        const canvas = document.getElementById(id); //clears canva
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 275, 180);
    }

}

function next2()
{
    document.getElementById('nextContainer1').style.display="none";
    document.getElementById('nextContainer2').style.display="none";
    document.getElementById('nextContainer3').style.display="block";
tabChange2();
canvaAnalysisMST();//to create MST
canvacluster();//create clusters
}

function tabChange2()
{
    var compute=document.getElementById('tab-2')
    compute.style.backgroundColor = "#004E86";
    document.getElementById('calImg').src='images/calculator.png';

    var comCreate=document.getElementById('comp-create');
    comCreate.style.color = "#FFC000";
    comCreate.style.backgroundColor = "#004E86";

    var analyse=document.getElementById('tab-3')
    analyse.style.color = "#004E86";
    analyse.style.backgroundColor = "#ffd964";
    document.getElementById('clusterimg').src='images/cluster1.png';

    modal.style.height='670px'
}

function canvaAnalysisMST()
{
const newCanvas = document.getElementById('canvas-Ana-MST');
const ctx = newCanvas.getContext('2d');

var originalCanvas = document.getElementById('canvasMST');

// Set the dimensions of the new canvas to match the original canvas
newCanvas.width = originalCanvas.width;
newCanvas.height = originalCanvas.height;

// Draw the content of the original canvas onto the new canvas
ctx.drawImage(originalCanvas, 0, 0);
}

function canvacluster()
{
    const canvas = document.getElementById('canvas-cluster');
    const ctx = canvas.getContext('2d');
    drawnode(ctx,'#004E86','white');
}