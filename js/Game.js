class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    reset(){
        database.ref('/').set({
            gameState : 0,
            playerCount : 0
        })
    }
    
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form();
                form.display();
            }
            player1 = createSprite(200,500);
            player1.addImage("player1",player_img);
            player1.visibility = false;

            player2 = createSprite(800,500);
            player2.addImage("player2", player_img);
            player2.visibility = false;

            players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 
            if(index === player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name , x-25 , y+25);
            }

            fill("white");
            text("Player 1 : " + allPlayers.player1.score,50,50);
            text("Player 2 : " + allPlayers.player2.score,50,100);

        }


        // Give movements for the players using arrow keys
        if(keyIsDown(LEFT_ARROW) && player.index!== null){
            player.distance += 10;
            player.updateInfo();
        }

        if(keyIsDown(RIGHT_ARROW) && player.index!== null){
            player.distance -= 10;
            player.updateInfo();
        }

        if(fruitGroup.isTouching(player1) || fruitGroup.isTouching(player2)){
            fruitGroup.destroyEach();
            player.score+=1;
            player.updateInfo();
        }

        // Create and spawn fruits randomly
        if(frameCount%20===0){
            fruits = createSprite(random(100,1000),-20,100,100)
            fruits.velocityY=6;
            // console.log("working");
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1 : fruits.addImage("apple",apple_img);
                break;
                case 2 : fruits.addImage("banana",banana_img);
                break;
                case 3 : fruits.addImage("orange",orange_img);
                break;
                case 4 : fruits.addImage("pineapple",pineapple_img);
                break;
                case 5 : fruits.addImage("melon",melon_img);
                break;
            }
            fruitGroup.add(fruits);
        }

        if(player.index !== null){
            // Destroy Fruits , 
        }
    }

    end(){
       console.log("Game Ended");
    }
}