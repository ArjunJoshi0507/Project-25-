class TrashCan{
    constructor(x,y,width,height){
        var options = {
         isStatic:true,
         friction:0.5,
         density:1
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png")

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        fill(0);
        //rect(0,0,this.width,this.height)
        image(this.image,0,0,200,200);
        pop();
    }
}