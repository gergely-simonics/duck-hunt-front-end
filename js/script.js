var ducks=[];


function setup() {
    console.log("hi");
    createCanvas(640,480);
    for ( let i = 0; i <5; i++){
        ducks[i]= new Duck(i*100,i*80)
    }
}

function draw(){
    background(60);
    for (var i = 0;i < ducks.length;i++){
        ducks[i].show();
        ducks[i].move();
    }
    noStroke();
    fill(255,0,0);
    ellipse(mouseX,mouseY,8,8);
}
function mousePressed(){
    console.log(mouseX,mouseY);
}