class Ball{
constructor(x,y,r){
   var  options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.x=x
    this.y=y
    this.r=r
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y)
    ellipseMode(RADIUS)
   
    //rectMode(CENTER);
    fill("orange");
    strokeWeight(4)
    stroke("black");
   
  
    ellipse(0,0, this.r);
    pop();
   
}
}