var database;
var gameState = 0;
var playerCount;
var form, player, game, allPlayers, distance = 0;
var car1, car2, car3, car4, cars;
var car_r, car_ba, car_w, car_bu, ground, track;
//var ranking = [];

function preload(){
    car_r = loadImage("sprite/car2.png");
    car_ba = loadImage("sprite/car4.png");
    car_w = loadImage("sprite/car1.png");
    car_bu = loadImage("sprite/car3.png");
    ground = loadImage("sprite/ground.png");
    track = loadImage("sprite/track.jpg");
}

function setup(){
    createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}