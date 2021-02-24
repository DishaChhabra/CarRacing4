var database;
var gameState = 0;
var player, playerCount, form, game;
var allPlayers
var car1, car2, car3, car4, cars;
function setup(){
    createCanvas(displayWidth-30, displayHeight-160);
    // creating database
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    }

function draw(){
    if(playerCount === 4){
        game.setState(1)
    }
    if(gameState === 1){
        clear()
        game.play()
    }
    }