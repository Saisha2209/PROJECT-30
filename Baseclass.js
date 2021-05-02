class BaseClass{
    constructor(x,y,width,height){
        var options={
           isStatic:1,
           'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      
        this.width = width;
        this.height = height;
     
       this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y)
        rotate(this.body.angle);
      
        rectMode(CENTER);
       
     
        rect(0,0, this.width, this.height);
        pop(); 
    }
}