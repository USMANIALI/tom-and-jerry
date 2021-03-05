var tom,jerry,bg,tomanimation,tomanimation2,tomanimation3,jerryanimation,jerryanimation2,jerryanimation3;
function preload() {
    //load the images here
    tomanimation=loadAnimation("images/cat1.png")
    tomanimation2=loadAnimation("images/cat2.png","images/cat3.png")
    tomanimation3=loadAnimation("images/cat4.png")
    bg=loadImage("images/garden.png")
    jerryanimation=loadAnimation("images/mouse1.png")
    jerryanimation2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryanimation3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,500)
tom.addAnimation("tomsleeping",tomanimation);
tom.scale=0.1;
jerry=createSprite(200,500);
jerry.addAnimation("jerrystanding",jerryanimation);
jerry.scale=0.1

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
console.log(tom.x-jerry.x);
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomlastimage",tomanimation3)
    tom.changeAnimation("tomlastimage")
    tom.x=300;

    jerry.addAnimation("jerrylastimage",jerryanimation3)
    jerry.changeAnimation("jerrylastimage")
}

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-2;
    tom.addAnimation("tomwalking",tomanimation2)
    tom.changeAnimation("tomwalking");

    jerry.addAnimation("jerryteasing",jerryanimation2)
    jerry.changeAnimation("jerryteasing")
}

}
