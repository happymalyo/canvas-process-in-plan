// Variable et constante
var fillStyle, font, text, textSize
// Boutons
const btnCircle = document.getElementById('btn-check-circle-outlined');
const btnWarehouse = document.getElementById('btn-check-warehouse-outlined');
const btnUploadImg = document.getElementById('formPlanFile');
// Input
const labelInputICPE = document.getElementById('labelInputICPE');
// Le plan
var canvasPlan = document.getElementById('canvasPlan');
// Text value
var getText = document.getElementById('listCoordonne');
// Function select image to draw
function functionDrawPoint (style, font, text) {
        this.fillStyle = style; // Red color
        this.font=font;
        this.text=text;
}
// Function polygon
function functionDrawPolygon() {
    
}

// Fonctionnalité des boutons
if(btnCircle.addEventListener('click', () => {
    if(btnCircle.checked == true) {
        if(btnWarehouse.checked == true) {
            btnWarehouse.checked = false; 
        }
        // Define image to draw
        functionDrawPoint('#20c997','25px FontAwesome','\uf111');
    } else {
        functionDrawPoint(null,null,null);
    }
}));

if(btnWarehouse.addEventListener('click', () => {
    if(btnWarehouse.checked == true) {
        if(btnCircle.checked == true) {
            btnCircle.checked = false; 
        }
        // Define image to draw
        // functionDrawPoint('#0d6efd','20px FontAwesome','\uF494');
        
        // Function polygone
        var context=canvasPlan.getContext("2d");

        function reOffset(){
            var BB=canvasPlan.getBoundingClientRect();
            offsetX=BB.left;
            offsetY=BB.top;        
        }

        var offsetX,offsetY;

        reOffset();

        window.onscroll=function(e){ 
            reOffset(); 
        }

        context.lineWidth=2;
        context.strokeStyle='blue';

        var coordinates = [];
        var isDone=false;

        canvasPlan.onmousedown(function (e) {
            handleMouseDown(e);
        })

        function handleMouseDown(e){
            // if(isDone || coordinates.length>10){return;}
        
            // tell the browser we're handling this event
            e.preventDefault();
            e.stopPropagation();
        
            mouseX=parseInt(e.clientX-offsetX);
            mouseY=parseInt(e.clientY-offsetY);
            coordinates.push({x:mouseX,y:mouseY});
            drawPolygon();
        }

        function drawPolygon(){
            context.clearRect(0,0,cw,ch);
            context.beginPath();
            context.moveTo(coordinates[0].x, coordinates[0].y);
            for(index=1; index<coordinates.length;index++) {
            context.lineTo(coordinates[index].x, coordinates[index].y);
            }
            context.closePath();
            context.stroke();
        }

    } else {
        // Clear image to draw
        functionDrawPoint(null,null,null);
    }
}));
// Fin fonctionnalité des boutons


// Load canvas
document.addEventListener('DOMContentLoaded', () => {
    ctx = canvasPlan.getContext('2d');
    canvasPlan.width = 1081;
    canvasPlan.height = 721;

    // Zom function
    // let zoom = 1;
    // const ZOOM_SPEED = 0.1;

    // document.addEventListener("wheel", (e) => {
    //     if(e.deltaY > 0) {
    //         canvasPlan.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
    //     } else {
    //         canvasPlan.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
    //     }
    // });
});


// Load image
btnUploadImg.addEventListener('change', (e) => {
    var url = URL.createObjectURL(e.target.files[0]);
    var ctx = canvasPlan.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0,0);
    }
    imageObj.src = url;
})
// Fin load image

// Define canvas
canvasPlan.addEventListener('mousemove', getCoordonner, false);
var tableCoordonne = new Array();

// Draw in canvas
canvasPlan.addEventListener('click', function(e){
    getPosition(e);
});

function getPosition(event){
    var rect = canvasPlan.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
       
    drawCoordinates(x,y);
}

// Function draw element
function drawCoordinates(x,y){	
    if (this.fillStyle == null && this.font == null && this.text == null) {
        alert("Veuillez sélectionné un élément de la pannelle.");
    } else {
        if (labelInputICPE.value.length == 0 && btnCircle.checked == true) {
            alert("Veuillez saisir une ICPE.")
        } else {
            var ctx = canvasPlan.getContext("2d");

            // Dra image
            ctx.fillStyle = this.fillStyle;
            ctx.font=this.font;
            ctx.textAlign = 'center';
            ctx.fillText(this.text,x,y);

            // Draw text
            ctx = canvasPlan.getContext("2d");
            ctx.font = '15pt Lato';
            ctx.fillStyle = '#797979';
            ctx.textAlign = 'center';
            ctx.fillText(this.labelInputICPE.value,x,y);

            // Add coordonner in table
            getCoordonnerSelect(x,y);
        }
    }
}

// Add coordonnee in table
function getCoordonnerSelect(x,y) {
    if (labelInputICPE.value.length != 0) {
        tableCoordonne.push([x,y, labelInputICPE.value])
    }
    getText.innerHTML = tableCoordonne;
}

// View live coordonnee
function getCoordonner(ev) {
    var bounding = ev.target.getBoundingClientRect();
    var x = ev.clientX - bounding.left;
    var y = ev.clientY - bounding.top;
    var getCoordText = document.getElementById('coordText');

    getCoordText.innerHTML = "Coordonné X : " + x + "; Coordonné Y = " + y +";";
}

// Cancel and clear all draw an value
document.getElementById('annuler').addEventListener('click', function() {
    var ctx = document.getElementById("canvasPlan").getContext("2d");
    tableCoordonne.length = 0
    getText.innerHTML = tableCoordonne
    ctx.clearRect(0, 0, canvasPlan.width, canvasPlan.height);
  }, false);

