class bob{
    constructor(x,y,radius)    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body = Bodies.circle(x,y,radius,options);

    World.add(world, this.body); 
        
    }
     
    display(){
        var pos = this.body.position
        ellipse(100,20,30,40,90);
         

    }
     
}