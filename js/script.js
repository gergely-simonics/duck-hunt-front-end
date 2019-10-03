let url = "http://10.44.3.185:8762/duck/ducks";
var ducks = [];


function preload() {

    httpGet(url, 'json', function (response) {
        for (let i = 0; i < response.length; i++) {
            ducks.push(new Duck(response[i].id, response[i].coordinate.x, response[i].coordinate.y))
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
        ducks = [];
        for (let i = 0; i < response.length; i++) {
            for (let i = 0; i < response.length; i++) {
                ducks.push(new Duck(response[i].id, response[i].coordinate.x, response[i].coordinate.y))
            }
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
        x: mouseX,
        y: mouseY
    };
    console.log(mouseX, mouseY);
    httpPost("http://10.44.3.185:8762/shooter/shoot", data, function (response) {
        console.log(response);
        for(var i = ducks.length-1; i>-1 ; i--){
            if(ducks[i].id === response.id){
                ducks.splice(i, 1);
                break;
            }
        }
    })

}