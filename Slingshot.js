class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
       this.image1=loadImage("sprites/sling1.png");
       this.image2=loadImage("sprites/sling2.png");
       this.image3=loadImage("sprites/sling3.png");
       World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        push();

           
            stroke(65,43,21);
            if(pointA.x<220)
            {
                strokeWeight(7);
            
            line(pointA.x+30, pointA.y, pointB.x+30, pointB.y+30);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+30);
            
            image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
            else
            {
                strokeWeight(3);
                line(pointA.x-30, pointA.y, pointB.x+30, pointB.y+30);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y+30);
                
                image(this.image3,pointA.x+30,pointA.y-10,15,30);
                
            }
            pop();
        }
   image(this.image1,175,20,this.width/4,this.height/100);
   image(this.image2,149,20,this.width/4,this.height/100);
   
   
    }
    
}