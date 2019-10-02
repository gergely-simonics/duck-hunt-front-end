function Duck(x,y) {
    this.x = x;
    this.y = y;


    this.show = function(){
        fill(0,255,0);
        ellipse(this.x,this.y,20,20);
    };

    this.move = function(){
        this.x += 2
    }



}