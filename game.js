class Game{
    constructor(){
        
    }

    // read the gameState from database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })  
    }

    // write the gameState in database
    setState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2= createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)

        cars = [car1, car2, car3, car4]
    }

    play(){
        form.removeForm()
        Player.getPlayersInfo()
        if(allPlayers != undefined){
            var index = 0
            var x = 0
            var y 
            for(var i in allPlayers){
            // index is position of object. For example 1 = [1]
                index++
                x = x+200
                y = displayHeight-allPlayers[i].distance
                cars[index-1].x = x
                cars[index-1].y = y
                if(index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }

        }
        if(keyDown("up") && player.index != null){
            player.distance = player.distance + 10
            player.setInfo()
        }
        drawSprites()
    }
    
}