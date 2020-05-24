var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

var colorArray=[
    "#1b1919"
]
var mouse={
    x:undefined,
    y:undefined
}
var maxRadius=50;
var totalCircles=50;

window.addEventListener("mousemove",function(event){
    mouse.x=event.x;
    mouse.y=event.y;
});

window.onload=changeCount();


function changeCount(){
    if(window.innerWidth>360 && window.innerWidth<450){
        totalCircles=70;
    }else if(window.innerWidth>450 && window.innerWidth<650){
        totalCircles=100;
    }else if(window.innerWidth>650 && window.innerWidth<800){
        totalCircles=150;
    }
    else if(window.innerWidth>800 && window.innerWidth<950){
        totalCircles=170;
    }
    else if(window.innerWidth>950){
        totalCircles=200;
    }
}



window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    changeCount();
    init();
});


function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
this.draw=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.strokeStyle="black";
    c.stroke();
    c.fillStyle =this.color;
    c.fill();
}

this.update =function(){
    
    if(this.x+this.radius>window.innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx;
    }
    if(this.y+this.radius>window.innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy;
    }
    

    this.x+=this.dx;    
    this.y+=this.dy;

    // InterActivity
    if(mouse.x-this.x < 100 && mouse.x-this.x > -100 && mouse.y-this.y < 100 && mouse.y-this.y > -100 ){
        if(this.radius<maxRadius){
            this.radius += 1;
        }
    }else if(this.radius>this.minRadius){
        this.radius -= 1;
    }


    this.draw();
}

}

var CircleArray=[];


function init(){

    CircleArray=[];

    for(var i=0;i<totalCircles;i++){
        var x=Math.random()*(innerWidth -radius)+radius;
        var y=Math.random()*(innerHeight -radius)+radius;
        var dx= (Math.random() - 0.5);
        var dy=(Math.random() - 0.5);
        var radius=Math.random()*20+10;
        CircleArray.push(new Circle(x,y,dx,dy,radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<CircleArray.length;i++){
        CircleArray[i].update();
    }
}

init();
animate();


