var x = 300;y = 300, k = 0, j = 50, nivel = 1, vida = 1;

// os códigos de "setup" só executam uma vez 
function setup() {

   createCanvas(700,500);
}

// os códigos de "draw" executam constantemente 
function draw() {
  background(25);
  // MOVIMENTOS //
  ellipse(x, y, 55, 55);

 //MOVIMENTOS DO JOGADOR// 

  //Limitações de espaço horizontal//
  if(x<0){
    x=10}
  if(x>700){
    x = 690}
  //Limitações de espaço vertical //
    if(y<0){
    y=10}
  if(y>500){
    y = 490}

    if(keyIsDown(DOWN_ARROW)){
      y += 5;
    }
    if(keyIsDown(UP_ARROW)){
      y -= 5;
    }
  
  if (keyIsDown(LEFT_ARROW)) {
    
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  // MOVIMENTOS INIMIGO //
  rect(j,k,50,50);
  k+=5;
  if(k>500){  
    k = 0;
  }
  //Legenda// 
  textSize(20);
  text("Nível: "+nivel,600,30);
  text('Vida: '+vida,500,30)
  fill(255,255,255);

  // Colisão // 
  if(dist(x,y,j,k)<(90)){
    vida--
    k=10
  }

}
