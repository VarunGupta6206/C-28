class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
         this.image1=loadImage("sprites/sling1.png");
         this.image2=loadImage("sprites/sling2.png");
         this.image3=loadImage("sprites/sling3.png");   
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       image(this.image1,210,30);
       image(this.image2,180,30);
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           push();
            strokeWeight(4);
            stroke("#54270F");
           
            
            if(pointA.x>220){
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.image3,pointA.x+22,pointA.y-5,15,30);    


            }
            else{
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.image3,pointA.x-20,pointA.y);


            }
            pop();
        }
    }
    
}