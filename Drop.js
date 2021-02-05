class Drop{
    constructor(x,y,radius,angle){
     var options = {
         isStatic : false ,
         friction : 0.1
     }

     this.body = Bodies.circle(x,y,radius,options)
     this.radius = radius
     
     World.add(world,this.body)

     var maxDrops = 100

     for(var i=0; i<maxDrops; i++){
        drop.push(new createDrop(random(0,400),random(0,400)))
     }
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.pos.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse( 0, 0, this.width, this.height);
      pop();
    }
}