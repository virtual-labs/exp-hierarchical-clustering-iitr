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
        container: "swal-container1",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal2-content",
    },
   
});
}

function waitforme(millisec) { 
return new Promise(resolve => { 
setTimeout(() => { resolve('') }, millisec); 
}) 
} 


const ROW1=[9,3,6,11];var a=0;
const ROW2=[7,5,10];var b=0;
const ROW3=[9,2];var c=0;
const ROW4=[8];
matrix();

function matrix()
{
    var table= document.getElementById('dataSetTable');
    var rowCount = table.rows.length;
    for(i=1;i<rowCount;i++)
    {
        var row = table.rows[i];
        for(j=1;j<6;j++)
        {
            if(i==j)
            {
                row.insertCell(j).innerHTML=0
            }
            else if(i<j)
            { 
                if(i==1)
                {
                    row.insertCell(j).innerHTML=ROW1[a];
                    a++;
                }
               else if(i==2)
               {
                    row.insertCell(j).innerHTML=ROW2[b];
                    b++;
               }
               else if(i==3)
               {
                    row.insertCell(j).innerHTML=ROW3[c];
                    c++;
               }
               else if(i==4)
               {
                    row.insertCell(j).innerHTML=ROW4[0];
               }
              
            }

            else{
                row.insertCell(j)
            }
        }
    }
}

function waitforme(millisec) { 
    return new Promise(resolve => { 
    setTimeout(() => { resolve('') }, millisec); 
    }) 
    } 


var ii;var table;var flagCost=true;
async function enterCost()
{
    document.getElementById('start').disabled=true;
table=document.getElementById('arranged-table');
var rowCount = table.rows.length;
    for(ii=1;ii<rowCount;)
    {
        if(flagCost)
    {
        flagCost=false;
        var row = table.rows[ii];
        var cells = row.cells;
        cells[2].style.border = "2px solid #004E86";
        cells[2].addEventListener("click", myFun);
    }
    await waitforme(2000);
}
}

function myFun()
{
    var row = table.rows[ii];
    var cells = row.cells;
    console.log(cells[2].innerText);
    if (cells[2].innerText == "") {
    costs(cells,ii); 
    }
}

var cost=[2,3,5,6,7,8,9,9,10,11]
function costs(cells,i)
{
Swal.fire({
title: "Enter the cost of the corresponding edge using either a graph or an adjacency matrix.",
input: "text",
confirmButtonText: "SUBMIT",
allowOutsideClick: false,
html:"Hint: Edge cost",
target: '.container',
customClass: {
        container: "swal-container",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
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
        popup.style.marginTop = "340px";
        popup.style.marginLeft = "380px";
        container.style.top = "0";
        container.style.left = "0";
        container.style.padding = "0";
    },
showCancelButton: false,
inputValidator: (value) => {
  if (!value) {
    return "Please enter the value.";
  } else {
    guessedValue = value;
    if (Number(guessedValue) == Number(cost[i-1])) {
        if(ii!=10)
        {
            alerts1('success','Correct!','Repeat the process by clicking on <b style="color:#004E86">NEXT</b> highlighted cell.');
        }
        else{
            alerts1('success','Table completed!!','Create an MST with the help of a table, and to begin, click on the <b style="color:#004E86">DRAW MST</b> button.');
            document.getElementById('drawMST').disabled=false;
        }
        
      cells[2].removeEventListener("click",myFun);
      cells[2].style.border = "1px solid #6EC3FF";
      cells[2].innerText = Number(value);     
      flagCost=true;    
      ii++;      
    } else {
      return "Please fill the correct value.";
    }
  }
},
});
}


canva();
function canva()
{
    const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw edges of the graph
ctx.strokeStyle = '#0070C0';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="#004E86";
ctx.moveTo(50, 30); // 1 node
ctx.lineTo(250, 30); // 1-2 edge
ctx.fillText("9",150,25); //cost

ctx.moveTo(50, 30);
ctx.lineTo(50, 200); // 1-3 edge
ctx.fillText("3",38,130); //cost

ctx.moveTo(50, 30);
ctx.lineTo(250, 200); // 1-4 edge
ctx.fillText("6",120,85); //cost

ctx.moveTo(50, 30);
ctx.lineTo(400, 115); // 1-5 edge
ctx.fillText("11",300,90); //cost

ctx.moveTo(250, 30); // 2 node
ctx.lineTo(250, 200); // 2-4 edge
ctx.fillText("5",240,130); //cost

ctx.moveTo(250, 30); // 2 node
ctx.lineTo(50, 200); // 2-3 edge
ctx.fillText("7",115,135); //cost

ctx.moveTo(250, 30); // 2 node
ctx.lineTo(400, 115); // 2-5 edge
ctx.fillText("10",335,75); //cost

ctx.moveTo(50, 200); // 3 node
ctx.lineTo(250, 200); // 3-4 edge
ctx.fillText("9",150,195); //cost

ctx.moveTo(50, 200); // 3 node
ctx.lineTo(400, 115); // 3-5 edge
ctx.fillText("2",300,130); //cost

ctx.moveTo(250, 200); // 4 node
ctx.lineTo(400, 110); // 4-5 edge
ctx.fillText("8",335,170); //cost

ctx.closePath();
ctx.stroke();

// Draw vertices
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(50, 30, 15, 0, 2 * Math.PI); //1
ctx.fill();
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("1",45,35);
ctx.stroke();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(250, 30, 15, 0, 2 * Math.PI); //2
ctx.fill();
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("2",245,35);
ctx.stroke();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(50, 200, 15, 0, 2 * Math.PI); //3
ctx.fill();
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("3",45,205);
ctx.stroke();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(250, 200, 15, 0, 2 * Math.PI); //4
ctx.fill();
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("4",245,205);
ctx.stroke();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(400, 115, 15, 0, 2 * Math.PI);//5
ctx.fill();
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText("5",395,122);
ctx.stroke();
}

function drawMST()
{
minEdge('Pick Edge!!','Please enter the edge (no.) with the lowest cost from the table.<br>for e.g. e1');
document.getElementById('drawMST').disabled=true;
}

var count=0;var edge=['e1','e2','e3','e4']; var e=0;


//min edge
function minEdge(title,html)
{
    Swal.fire({
        title: title,
        input: "text",
        confirmButtonText: "SUBMIT",
        target: '.sec-con-table',
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
                    Swal.fire({
                    icon:'success',
                    title: "No cycle detected!",
                    target: '.container',
                    allowOutsideClick: false,
                    customClass: {
                        container: "swal-container1",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal2-content",
                    },
                   
                    showCancelButton: false})
                .then((result) => {
                    if (result.isConfirmed) {
                        count++;
                         e++;
                         table.rows[count].style.backgroundColor = "rgb(197 231 255)";
                         table.rows[count].style.color = "black";
                    } 
                })
            
            } else {
              return "Please fill the correct value.";
            }
          }
        },
      });
}


//spanning tree animation
var ctn1=0;var x=65;var y=270;var X;var Y;
var xl2=50;var yl2=65;var Yl2;
var xl3=250;var yl3=65;var Yl3;
var xl4=55;var yl4=65;var Xl4;var Yl4;


function setup() {
    var canvas=createCanvas(430, 293);
    canvas.parent('sketch-holder');
    canvas.style('margin-left', '10px'); // Adjust the border radius as needed
 
    X = 1.6;
    Y = 0.5;

    Yl2=.95;

    Yl3=.95;

    Xl4=.9;
    Yl4=1;
}

function coloursc1() {
    stroke('#004E86');
    fill('white');
    ellipse(50, 50, 25, 25);
    stroke('white');
    fill('black');
    textSize(18);
    text('1', 45, 55);

}
function coloursc2() {
    stroke('#004E86');
    fill('white');
    ellipse(250, 50, 25, 25);
    stroke('white');
    fill('black');
    textSize(18);
    text('2', 245, 55);

}
function coloursc3() {
    stroke('#004E86');
    fill('white');
    ellipse(50, 270, 25, 25);
    stroke('white');
    fill('black');
    textSize(18);
    text('3', 45, 275);

}
function coloursc4() {
    stroke('#004E86');
    fill('white');
    ellipse(250, 270, 25, 25);
    stroke('white');
    fill('black');
    textSize(18);
    text('4', 245, 275);

}
function coloursc5() {
    stroke('#004E86');
    fill('white');
    ellipse(400, 170, 25, 25);
    stroke('white');
    fill('black');
    textSize(18);
    text('5', 395, 175);

}

function chngecolor(x1,y1,x2,y2,t) {
    stroke('#004E86');
    fill('#004E86');
    ellipse(x1,y1,x2,y2);
    fill('white');
    textSize(18);
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
    stroke('white');
    line(x1,y1,x2,y2)
}
function lines1()
{
    drawline(65,270,385,170);
    strokeWeight(1);
    stroke('white')
    fill('white');
    textSize(12);
    text('2', 160, 233);
    chngecolor(50, 270, 25, 25,3);
    chngecolor(400, 170, 25, 25,5);
}

function lines2()
{
    drawline(50,65,50,255);
    strokeWeight(1);
    stroke('white')
    fill('white');
    textSize(12);
    text('3', 40, 155);
    chngecolor(50, 50, 25, 25,1)
    chngecolor(50, 270, 25, 25,3);
}

function lines3()
{
    drawline(250,65,250,255);
    strokeWeight(1);
    stroke('white')
    fill('white');
    textSize(12);
    text('5', 240, 155);
    chngecolor(250, 50, 25, 25,2);
    chngecolor(250, 270, 25, 25,4);
}

function lines4()
{
    drawline(55,65,235,265);
    strokeWeight(1);
    stroke('white')
    fill('white');
    textSize(12);
    text('6', 155, 165);
    chngecolor(50, 50, 25, 25,1);
    chngecolor(250, 270, 25, 25,4);
}

var flag=true;var flag2=true;var flag3=true;var flag4=true;
function draw() {
    
    background(color('#FFFFFF'));

    coloursc1();
    coloursc2();
    coloursc3();
    coloursc4();
    coloursc5();
  strokeWeight(3);
  stroke('white');
 
  if(count==1)
  {

    drawline1(65,270,385,170);
    stroke('#004E86');
    x=x+X;
    y=y-Y
    if (x <= 385) {
        line(x, y, 385, 170); //for 1    
    }
    if(x>=385)
    { 
     lines1();
     if(flag==true)
     {
        minEdge('Pick Edge!!','Enter the the next lowest-cost edge (no.) from the table.<br>for e.g. e1');
        flag=false;
     }
    
    }
  }
  
  //line 2
if(count==2)
{
    drawline1(50,65,50,255);
    lines1();
    strokeWeight(3);
    stroke('#004E86');
    yl2=yl2+Yl2
    if (yl2 <= 255) {
        line(xl2, yl2, 50, 255); //for 1-3
        
    }
    if(yl2 >= 255)
    {
        lines2();
        if(flag2==true)
        {
           minEdge('Pick Edge!!','Enter the the next lowest-cost edge (no.) from the table.<br>for e.g. e1');
           flag2=false;
        }
    }
}
    
    

    //line 3
    if(count==3)
    {
        drawline1(250,65,250,255);
        lines1();
        lines2();
        strokeWeight(3);
        stroke('#004E86');
        yl3=yl3+Yl3
        if (yl3 <= 255) {
            line(xl3, yl3, 250, 255); //for 1-3
            
        }
        if(yl3 >= 255)
        {
            lines3();
            if(flag3==true)
     {
        minEdge('Pick Edge!!','Enter the the next lowest-cost edge (no.) from the table.<br>for e.g. e1');
        flag3=false;
     }
        }
    }
    


//line 4
if(count==4)
{
    drawline1(55,65,235,265);
    lines1();lines2();lines3();
    strokeWeight(3);
    stroke('#004E86');
    xl4=xl4+Xl4;
    yl4=yl4+Yl4
    if (xl4 <= 235) {
       line(xl4, yl4, 235, 265); //for 1
        
    }
    if(xl4>=235)
    {
        lines4();
        if(flag4==true)
        {
            document.getElementById('NEXT').disabled=false;
            alerts1('success','MST created!!',"Now click on the <b style='color:#004E86'>NEXT</b> button");
           flag4=false;
        }
       
    }
}
    

};

function next()
{
    document.getElementById('nextContainer1').style.display="none";
    document.getElementById('nextContainer2').style.display="block";
    document.getElementById('box1').style.height="680px";
    document.getElementById('myModal').style.height="620px";
    document.getElementById('myModal').style.paddingTop="60px";


    canva2();
}

function enteredge()
{
    document.getElementById('start2').disabled=true;
    breakEdge('Break Edge!!','Enter the source, destination node which has highest edge cost.for e.g 1,4');
}


var indexEdge=0;
var maxEdge1=['1,4','2,4','1,3','3,5'];
var maxEdge2=['4,1','4,2','3,1','5,3'];
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
            if (value == maxEdge1[indexEdge] || value==maxEdge2[indexEdge]) {
                    Swal.fire({
                    icon:'success',
                    title: "Edge Removed!",
                    target: '.container',
                    allowOutsideClick: false,
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
                        container.style.height = "680px";
                        popup.style.marginTop = "320px";
                       // popup.style.marginLeft = "390px";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";
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
                        if(indexEdge==3)
                        {
                            document.getElementById('graph5-control').style.display="block";
                            canva6();
                        }
                        
                        indexEdge++;
                    } 
                })
            
            } else {
              return "Please fill the correct value.";
            }
          }
        },
      });
}

function canva2()
{
    const canvas = document.getElementById('canvasMST');
const ctx = canvas.getContext('2d');

// Draw edges of the graph
ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";

ctx.moveTo(50, 30);
ctx.lineTo(50, 200); // 1-3 edge
ctx.fillText("3",35,120); //cost

ctx.moveTo(50, 30);
ctx.lineTo(250, 200); // 1-4 edge
ctx.fillText("6",120,85); //cost


ctx.moveTo(250, 30); // 2 node
ctx.lineTo(250, 200); // 2-4 edge
ctx.fillText("5",235,120); //cost


ctx.moveTo(50, 200); // 3 node
ctx.lineTo(360, 115); // 3-5 edge
ctx.fillText("2",120,160); //cost

ctx.closePath();
ctx.stroke();

// Draw vertices
drawnode(ctx);
}

function canvaAnalysisMST()
{
    const canvas = document.getElementById('canvas-Ana-MST');
const ctx = canvas.getContext('2d');

// Draw edges of the graph
ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";

ctx.moveTo(50, 30);
ctx.lineTo(50, 200); // 1-3 edge
ctx.fillText("3",35,120); //cost

ctx.moveTo(50, 30);
ctx.lineTo(250, 200); // 1-4 edge
ctx.fillText("6",120,85); //cost


ctx.moveTo(250, 30); // 2 node
ctx.lineTo(250, 200); // 2-4 edge
ctx.fillText("5",235,120); //cost


ctx.moveTo(50, 200); // 3 node
ctx.lineTo(360, 115); // 3-5 edge
ctx.fillText("2",120,160); //cost

ctx.closePath();
ctx.stroke();

// Draw vertices
drawnode(ctx);
}

function canvacluster()
{
    const canvas = document.getElementById('canvas-cluster');
    const ctx = canvas.getContext('2d');
    drawnode(ctx);
}

//graphs
function canva3()
{
    const canvas = document.getElementById('canvas3');
const ctx = canvas.getContext('2d');

ctx.setLineDash([]);
// Draw edges of the graph
ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";

ctx.moveTo(20, 30);
ctx.lineTo(20, 160); // 1-3 edge
ctx.fillText("3",25,100); //cost

ctx.moveTo(180, 30); // 2 node
ctx.lineTo(180, 160); // 2-4 edge
ctx.fillText("5",168,100); //cost


ctx.moveTo(20, 160); // 3 node
ctx.lineTo(90, 85); // 3-5 edge
ctx.fillText("2",60,135); //cost

ctx.closePath();
ctx.stroke();

// Draw vertices
drawVertex(ctx)
drawEllipse1(ctx)
}

function canva4()
{
    const canvas = document.getElementById('canvas4');
const ctx = canvas.getContext('2d');
ctx.setLineDash([]);
// Draw edges of the graph
ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";

ctx.moveTo(20, 30);
ctx.lineTo(20, 160); // 1-3 edge
ctx.fillText("3",25,100); //cost


ctx.moveTo(20, 160); // 3 node
ctx.lineTo(90, 85); // 3-5 edge
ctx.fillText("2",60,135); //cost

ctx.closePath();
ctx.stroke();

// Draw vertices
drawVertex(ctx);
drawEllipse2(ctx)
}

function canva5()
{
    const canvas = document.getElementById('canvas5');
const ctx = canvas.getContext('2d');
ctx.setLineDash([]);
// Draw edges of the graph
ctx.strokeStyle = '#004E86';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.font = "16px Arial";
ctx.fillStyle="white";

ctx.moveTo(20, 160); // 3 node
ctx.lineTo(90, 85); // 3-5 edge
ctx.fillText("2",60,135); //cost

ctx.closePath();
ctx.stroke();

// Draw vertices
drawVertex(ctx);
drawEllipse3(ctx)
}

function canva6()
{
const canvas = document.getElementById('canvas6');
const ctx = canvas.getContext('2d');
// Draw vertices
drawVertex(ctx);
drawEllipse4(ctx)
}

function drawnode(ctx)
{
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(50, 30, 15, 0, 2 * Math.PI); //1
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("1",45,35);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(250, 30, 15, 0, 2 * Math.PI); //2
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("2",245,35);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(50, 200, 15, 0, 2 * Math.PI); //3
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("3",45,205);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(250, 200, 15, 0, 2 * Math.PI); //4
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("4",245,205);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(360, 115, 15, 0, 2 * Math.PI);//5
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("5",355,122);
    ctx.stroke();
}

function drawVertex(ctx)
{
    ctx.setLineDash([]);

    ctx.strokeStyle = '#004E86';
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(20, 30, 10, 0, 2 * Math.PI); //1
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("1",15,35);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(180, 30, 10, 0, 2 * Math.PI); //2
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("2",175,35);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(20, 160, 10, 0, 2 * Math.PI); //3
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("3",15,165);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(180, 160, 10, 0, 2 * Math.PI); //4
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("4",175,165);
    ctx.stroke();
    
    ctx.fillStyle = '#004E86';
    ctx.beginPath();
    ctx.arc(90, 85, 10, 0, 2 * Math.PI);//5
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("5",85,90);
    ctx.stroke();
}

async function drawEllipse1(ctx)
{

    
    if (ctx.setLineDash !== undefined) {
        ctx.strokeStyle = 'blue';
        ctx.setLineDash([5, 10]);
      }

    
    ctx.beginPath();
    ctx.moveTo(7,7)
    ctx.lineTo(7,195);
    ctx.lineTo(115,80);
    ctx.lineTo(7,7);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(178, 90, 20, 90, 0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    document.getElementById('cluster-id').style.display="block";
    await waitforme(1000);
    breakEdge('Again Break Edge!!','Enter the <b>NEXT</b> source, destination node which has highest edge cost. for e.g 1,4')
    
}

async function drawEllipse2(ctx)
{

    
    if (ctx.setLineDash !== undefined) {
        ctx.strokeStyle = 'blue';
        ctx.setLineDash([5, 10]);
      }

    
    ctx.beginPath();
    ctx.moveTo(7,7)
    ctx.lineTo(7,195);
    ctx.lineTo(115,80);
    ctx.lineTo(7,7);
    ctx.closePath();
    ctx.stroke();

   // ctx.ellipse(178, 90, 20, 90, 0, 0, 2 * Math.PI);
   ctx.beginPath();
   ctx.arc(180, 30, 20, 0, 2 * Math.PI); //2
   ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(180, 160, 20, 0, 2 * Math.PI); //4
    ctx.closePath();
    ctx.stroke();

    var clus=document.getElementById('cluster-id');
    clus.innerHTML="Three clusters get formed: {2} ,{4} and {1,3,5}";
    await waitforme(1000);
    breakEdge('Again Break Edge!!','Enter the <b>NEXT</b> source, destination node which has highest edge cost. for e.g 1,4');
}


async function drawEllipse3(ctx)
{

    
    if (ctx.setLineDash !== undefined) {
        ctx.strokeStyle = 'blue';
        ctx.setLineDash([5, 10]);
      }

    ctx.beginPath();
    ctx.ellipse(57, 122, 22, 72, 10.22, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(20, 30, 20, 0, 2 * Math.PI); //1
   ctx.closePath();
    ctx.stroke();

   ctx.beginPath();
   ctx.arc(180, 30, 20, 0, 2 * Math.PI); //2
   ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(180, 160, 20, 0, 2 * Math.PI); //4
    ctx.closePath();
    ctx.stroke();

    var clus=document.getElementById('cluster-id');
    clus.innerHTML="Four clusters get formed: {2} ,{4}, {1} and {3,5}";
    await waitforme(1000);
    breakEdge('Again Break Edge!!','Enter the <b>NEXT</b> source, destination node which has highest edge cost. for e.g 1,4');
}

async function drawEllipse4(ctx)
{

    
    if (ctx.setLineDash !== undefined) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'blue';
        ctx.setLineDash([5, 10]);
      }


    ctx.beginPath();
    ctx.arc(20, 30, 20, 0, 2 * Math.PI); //1
   ctx.closePath();
    ctx.stroke();

   ctx.beginPath();
   ctx.arc(180, 30, 20, 0, 2 * Math.PI); //2
   ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(180, 160, 20, 0, 2 * Math.PI); //4
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(20, 160, 20, 0, 2 * Math.PI); //3
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(90, 85, 20, 0, 2 * Math.PI);//5
    ctx.closePath();
    ctx.stroke();

    var clus=document.getElementById('cluster-id');
    clus.innerHTML="Five clusters get formed: {1} ,{2}, {3}, {4} and {5}";
    await waitforme(1000);
    Swal.fire({
        icon:'success',
        title: "Singleton Clusters Formed!!!",
        html: 'Now click on the <b style="color:#004E86">NEXT</b> button.',
        target: '.container',
        allowOutsideClick: false,
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
            container.style.height = "680px";
            popup.style.marginTop = "320px";

            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";
        },
       
        showCancelButton: false});

     document.getElementById('NEXT2').disabled=false;
    document.getElementById('start2').disabled=true;
}

function resetEdgeBreaker()
{
    document.getElementById('cluster-id').style.display="none";
    indexEdge=0;
    document.getElementById('graph2-control').style.display="none";
    document.getElementById('graph3-control').style.display="none";
    document.getElementById('graph4-control').style.display="none";
    document.getElementById('graph5-control').style.display="none";
    next();
    document.getElementById('start2').disabled=false;
    document.getElementById('NEXT2').disabled=true;
}

function next2()
{
    document.getElementById('nextContainer1').style.display="none";
    document.getElementById('nextContainer2').style.display="none";
    document.getElementById('nextContainer3').style.display="block";
    document.getElementById('box1').style.height="600px";
    document.getElementById('myModal').style.height="570px";
    document.getElementById('myModal').style.paddingTop="30px";

tabChange();
canvaAnalysisMST();//to create MST
canvacluster();//create clusters
}

function tabChange()
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

}


