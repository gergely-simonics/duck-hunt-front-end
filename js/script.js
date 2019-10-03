let url = "http://localhost:8762/duck/ducks";
var ducks = [];


function preload() {

    httpGet(url, 'json', function (response) {
        for (let i = 0; i < response.length; i++) {
            ducks.push(new Duck(response[i].coordinate.x, response[i].coordinate.y))
        }
        console.log("im here")
    })
}

function setup() {
    console.log("hi");
    createCanvas(640, 480);
}

function draw() {
    background(60);
    httpGet(url, 'json', function (response) {
        for (let i = 0; i < response.length; i++) {
            ducks[i].x=response[i].coordinate.x;
            ducks[i].y=response[i].coordinate.y;
        }
    });
    for (var i = 0; i < ducks.length; i++) {
        ducks[i].show();
    }
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 8, 8);
}

function mouseClicked() {
    let data = {
        x:mouseX,
        y:mouseY
    };
    console.log(mouseX, mouseY);
    httpPost("http://localhost:8762/shooter/shoot",data,function(response){
        console.log(response)
    })

}