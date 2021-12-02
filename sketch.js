var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music= loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(850,600);

    block1 = createSprite(110,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(320,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(530,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "purple";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX = random(3,4);
    console.log(ball.velocityX);
    
    ball.velocityY = random(3,5);
    console.log(ball.velocityY);
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        music.stop();
        music.velocityX = 0;
        music.velocityY = 0;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "purple";
        music.play();
    }

    drawSprites();
}
