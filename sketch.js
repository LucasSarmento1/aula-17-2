var fundo;
var img_fundo;
var coelho;
var img_coelho;
var maca;
var img_maca;
var folha;
var img_folha;
var seleciona;

function preload(){
  //imagens pré-carregadas
  img_fundo = loadImage("fundo.png");
  img_coelho = loadImage("coelho.png");
  img_maca = loadImage("apple.png");
  img_folha = loadImage("folha1.png");
}

function setup(){
  createCanvas(400,490);
  //crie os sprites aqui
  fundo = createSprite(200,200,200,200);
  fundo.addImage("ground",img_fundo);
  fundo.scale=0.6;
  fundo.debug = true; 
   
  coelho = createSprite(200,420,200,200);
  coelho.addImage(img_coelho);
  coelho.scale=1;
  coelho.debug = true;

 
  
}

function draw() {
  background(0);
  coelho.x = mouseX;
  bordas= createEdgeSprites();
  coelho.collide(bordas);
  
  
  if(frameCount%80===0){
    seleciona = Math.round(random(1,2));
   if(seleciona === 1){
      gerarmaca();
   }
   else{
      gerarfolha(); 
    }
  }

  drawSprites();
}
function gerarmaca(){
  var maca = createSprite(Math.round(random(20,380)),0,10,10);
  maca.addImage(img_maca);
  maca.velocityY = 3;
  maca.scale=0.3;
  coelho.depth = maca.depth;
  maca.depth = coelho.depth-1;
  maca.debug = true;
}

function gerarfolha(){
  var folha = createSprite(Math.round(random(20,380)),-90,10,10);
  folha.addImage(img_folha);
  folha.velocityY = 3;
  folha.scale=0.3;
  coelho.depth = folha.depth;
  folha.depth = coelho.depth-1;
  folha.debug = true;
}