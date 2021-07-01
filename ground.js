class Ground {
    constructor() {
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(200,680,1500,20,options)
        World.add(world,this.body)
    }

    display() {
        rectMode(CENTER);
        fill("green");
        rect(200,680,1500,20);
    }
}

