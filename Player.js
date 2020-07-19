class Player{
    constructor(x, y, width, height){
        var options = {
            density : 0.1,
            velocity : 5
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.image = loadImage("curry.png")
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        image(this.image, displayWidth/2-150, displayHeight/2-50);
        pop();
    };

    run(){
        if(keyIsDown(RIGHT_ARROW)){
            this.velocityX = -10;
        }
    }

   /* shoot(){

    }

    drible(){

    }

    defend(){

    }*/

}