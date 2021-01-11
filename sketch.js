var database;
var gamestate,playercount,form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getstate()
  game.start()
}

function draw(){
  background("white");
  
}