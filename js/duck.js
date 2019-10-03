function Duck(id,x,y) {
    this.id= id;
    this.x = x;
    this.y = y;


    this.show = function(){
        fill(0,255,0);
        ellipse(this.x,this.y,20,20);
    };




}