class Box {
    constructor(x,y,w,h){
        var box_option={
            restitution:0.4,
            friction:0
        }
        this.body=Bodies.rectangle(x,y,w,h,box_option);
        this.w = w; 
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.w,this.h);
    }
};




