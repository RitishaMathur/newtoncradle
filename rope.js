class Rope
{
    constructor(body1,body2,offsetX)
    {
       this.offsetX=offsetX
        //this.offsetY=offsetY
        var options=
        {
         bodyA:body1,
         bodyB:body2,
        // length:10,
         //stiffness:0.04,
         pointB:{x:offsetX,y:0}
        }
     this.Rope=Constraint.create(options)
     World.add(world,this.Rope)
    }
    display()
    {
        var pointA=this.Rope.bodyA.position
        var pointB=this.Rope.bodyB.position
        strokeWeight(3)
        stroke(0)
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)
    }
}