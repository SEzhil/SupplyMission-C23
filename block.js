class Block{
constructor(x,y,width,height){
    var OPTIONS={'isStatic':true}
this.body=Bodies.rectangle(300,610,20,100,OPTIONS)
World.add(world,this.body)


this.Body=Bodies.rectangle(520,610,20,100,OPTIONS)
World.add(world,this.Body)

this.Body1=Bodies.rectangle(410,650,20,100,OPTIONS)
World.add(world,this.Body1)


}

display(){
fill("red")
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,20,100)
rect(this.Body.position.x,this.Body.position.y,20,100)
rect(this.Body1.position.x,this.Body1.position.y,200,20)
}}