
var box

function setup() {
  createCanvas(400,400);
box=createSprite(200,200,30,30)
box.shapeColor = "green";
}


function draw() 
{
  
  background(30);
  background("red")

//write the code to change background colour
  //to red when RIGHT_ARROW is pressed

 if(keyIsDown(RIGHT_ARROW)){
box.position.x=box.position.x+5

}
if(keyIsDown(RIGHT_ARROW)){

background("yellow")

}




if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-5
  background("blue")
}
if(keyIsDown(UP_ARROW)){
  box.position.y=box.position.y-5
  background("lightblue")
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y=box.position.y+5
  background("pink")
}

drawSprites()




}




