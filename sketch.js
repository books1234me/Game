var food = []
var bananaImage
var player, game, form
var db, gameState = 0, playerCount
var player1, player2, player3, player4
var allPlayers
var players
function preload() {
  bananaImage = loadImage("bananaSprite.png")  
}

function setup() {
  createCanvas(windowWidth-50, windowHeight-40);
  db = firebase.database()
  //food = new Group()
  //player = new Player()
  game = new Game()
  game.getGameState()
  game.start()
}

function draw() {
  //background(255,255,255);
  //if(frameCount%20 === 0){
  //spawnFood();
  //} 

  //drawSprites();
  //text("score: "+player.score,100,100)
  game.getGameState()
  if (playerCount === 4) {
    game.updateGameState(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }
  if (gameState === 2){
    game.end()
  }
}

