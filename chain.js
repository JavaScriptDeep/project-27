class chain{
constructor(bodyA, pointB){
var options = {
bodyA: bodyA,
pointB : pointB,
stiffness: 0.04,
length: 10

}
this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world, this.sling);

}
display(){
line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.position.x, this.pointB.position.y)




}


}
