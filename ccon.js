class Link{
    constructor(b1,b2){
        
        var options={
            bodyA:b1,
            bodyB:b2,
            length: 10,
            stiffness:1,
        }
        this.Link= Constraint.create(options);
      World.add(world,this.Link);  
    }
    display(){
    line(this.Link.bodyA.position.x,this.Link.bodyA.position.y,
        this.Link.bodyB.position.x,this.Link.bodyB.position.y)
    }
}