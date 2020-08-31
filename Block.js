class Block{

    constructor(x,y,w,h){

        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        
        this.width = w;
        this.height = h;

        World.add(world,this.body)
    }
    display(){

      var posi =  this.body.position;
      
      rectMode(CENTER)
      fill("red");
      rect(posi.x,posi.y,this.width,this.height);
    }
}