var database;
var back_img;
// 0 = initial val
// 1 = create
// 2 = play
// 3 = end
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var apple_img, banana_img, melon_img, orange_img, pineapple_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  apple_img = loadImage("images/apple2.png");
  banana_img = loadImage("images/banana2.png");
  melon_img = loadImage("images/melon2.png");
  orange_img = loadImage("images/orange2.png");
  pineapple_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  createEdgeSprites();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  game.getState();
  if(gameState===1){
    clear();
    drawSprites();
    game.play();
  }

  
  
}