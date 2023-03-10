var oceano, oceanoImg;
var navio, navio1;


function preload(){
  oceanoImg = loadAnimation("sea.png");
  navio1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(800,400);

  oceano = createSprite(200,200,10,10);
  oceano.addAnimation("mar", oceanoImg);
  navio = createSprite(600,305,10,10);
  navio.addAnimation("barco", navio1);
  navio.scale = 0.2;
  ///oceano.x = oceano.width /8;
  oceano.velocityX = 2;
  
}

function draw() {
  background("white");
    drawSprites();

    // if (oceano.x < 0){
    //   oceano.x = oceano.width/8;
    // }



}
