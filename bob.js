class Bob{
    constructor(x,y){
        var bounce={
            restitution:0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,60,bounce)
        //ellipseMode(x,y,10,10)
        World.add(world,this.body)
    }
    display(){
        //rectMode(CENTER)
        var pos = this.body.position;
        ellipseMode(RADIUS)
        fill("#6C32D5 ")
        ellipse(pos.x,pos.y,60,60)
    }
}