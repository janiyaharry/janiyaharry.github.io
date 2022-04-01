var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the behavior of our game
        var levelData = {
            "name": "Robots Rule",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                
                { "type": "spike", "x": 900, "y": groundY -250 },
                { "type": "spike", "x": 1500, "y": groundY -250 },
                { "type": "spike", "x": 2100, "y": groundY -250 },

                { "type": "thwomp", "x": 2800, "y": groundY -20 },
                { "type": "thwomp", "x": 3300, "y": groundY -20 },
                { "type": "thwomp", "x": 3800, "y": groundY -20 },

                { "type": "pipe", "x": 1200, "y": groundY -20 },
                { "type": "pipe", "x": 1700, "y": groundY -20 },
                { "type": "pipe", "x": 2500, "y": groundY -20 },

                { "type": "enemy", "x": 500, "y": groundY -50 },
                { "type": "enemy", "x": 1000, "y": groundY -50 },
                { "type": "enemy", "x": 1500, "y": groundY -50 },

                { "type": "enemy2", "x": 1800, "y": groundY -50 },
                { "type": "enemy2", "x": 2000, "y": groundY -50 },
                { "type": "enemy2", "x": 2200, "y": groundY -50 },

                { "type": "reward", "x": 900, "y": groundY -50 },
                { "type": "reward", "x": 1200, "y": groundY -150 },
                { "type": "reward", "x": 2200, "y": groundY -50 },
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSpike(x, y){ // This function creates a Spike obstacle
            var hitZoneSize = 25; //Creates the size of the hitzone
            var damageFromObstacle = 15; //Setting how much damage the object will inflict
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //Creates the obstable itself
            spikeHitZone.x = x; // The x value of the hitzone
            spikeHitZone.y = y; // The y value of the hitzone
            game.addGameItem(spikeHitZone); // Adds the hitzone to the game
          
            // Spike Obstacle
            var obstacleImage = draw.bitmap('../../../Images/spikemario.png'); // Draws the image and stores it in the viarble obstacleImagine
            spikeHitZone.addChild(obstacleImage); // Adds the image to the hitzone so we can see it
            obstacleImage.x = -105; // Lines up the x of the imgage with the hitzone
            obstacleImage.y = -150; // Lines up the y of the imgage with the hitzone 
            spikeHitZone.rotationalVelocity = 3; // Rotate the enemy image by 10 pixels 
            obstacleImage.scaleX = 0.5; // Controls the x scale of the image
            obstacleImage.scaleY = 0.5; // Controls the y scale of the image

        }

        function createThwomp(x, y){ //This function creates a Thwomp obstacle
            var hitZoneSize = 25; //Creates the size of the hitzone
            var damageFromObstacle = 15; //Setting how much damage the object will inflict
            var thwompHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //Creates the obstable itself
            thwompHitZone.x = x; // The x value of the hitzone
            thwompHitZone.y = y; // The y value of the hitzone
            game.addGameItem(thwompHitZone); // Adds the hitzone to the game
          
            // thwomp Obstacle
            var obstacleImage = draw.bitmap('../../../Images/thwompmario.png'); // Draws the image and stores it in the viarble obstacleImagine
            thwompHitZone.addChild(obstacleImage); // Adds the image to the hitzone so we can see it
            obstacleImage.x = -25; // Lines up the x of the imgage with the hitzone
            obstacleImage.y = -20; // Lines up the y of the imgage with the hitzone  
            obstacleImage.scaleX = 0.03; // Controls the x scale of the image
            obstacleImage.scaleY = 0.03; //Controls the y scale of the image

        }

        function createPipe(x, y){ // This function creates a Pipe obstacle
            var hitZoneSize = 25; //Creates the size of the hitzone
            var damageFromObstacle = 15; //Setting how much damage the object will inflict
            var pipeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //Creates the obstable itself
            pipeHitZone.x = x; // The x value of the hitzone
            pipeHitZone.y = y; // The y value of the hitzone
            game.addGameItem(pipeHitZone); // Adds the hitzone to the game
          
            // Spike Obstacle
            var obstacleImage = draw.bitmap('../../../Images/pipemario.png'); // Draws the image and stores it in the viarble obstacleImagine
            pipeHitZone.addChild(obstacleImage); // Adds the image to the hitzone so we can see it
            obstacleImage.x = -25; // Lines up the x of the imgage with the hitzone
            obstacleImage.y = -25; // Lines up the y of the imgage with the hitzone  
            obstacleImage.scaleX = 0.2; // Controls the x scale of the image
            obstacleImage.scaleY = 0.2; // Controls the y scale of the image

        }
    
        function createEnemy(x, y){
           
           //Ghost Enemy
            var enemy = game.createGameItem('enemy',15); // Creates the enemy game item and stores it in the varibale enemy
            var enemyImage = draw.bitmap('../../../Images/booghostmario.png'); // Draws a Mario Ghost and stores it in the variable enemyImage
            enemyImage.x = -35; // Align the square hitzone x
            enemyImage.y = -25; // Align the square hitzone y
            enemy.addChild(enemyImage);

            enemy.x = x;
            enemy.y = y;
            enemyImage.scaleX = 0.10; // Controls the x scale of the image
            enemyImage.scaleY = 0.10; // Controls the Y scale of the image
            game.addGameItem(enemy);
            enemy.velocityX = -1; // Move the enemy 1 pixel to the left
            

            // This function detects if the enemy collides with Halle and executes health decrease
            enemy.onPlayerCollision = function() {
            game.changeIntegrity(-75) // Decreases your health
            console.log('The enemy has hit Halle');
            enemy.fadeOut(); // This allows the enemy to fade out once shot by Halle Bot
            };

            // This functions detects if the projectile collides with Halle and it will increase the score
            enemy.onProjectileCollision = function(){
                    game.increaseScore(100); // This increases the players score by 100 if eliminated by Halle Bot
                    enemy.shrink(); // This allows the enemy to shrink once shot by Halle Bot
            };       
        }

        function createEnemy2(x, y){
           
            //Piranha Plant Enemy
             var enemy = game.createGameItem('enemy2',15); // Creates the enemy game item and stores it in the varibale enemy
             var enemyImage = draw.bitmap('../../../Images/piranhaplantmario.png'); // Draws a Mario Ghost and stores it in the variable enemyImage
             enemyImage.x = -30; // Align the square hitzone x
             enemyImage.y = -50; // Align the square hitzone y
             enemy.addChild(enemyImage);
 
             enemy.x = x;
             enemy.y = y;
             enemyImage.scaleX = 0.06; // Controls the x scale of the image
             enemyImage.scaleY = 0.06; // Controls the x scale of the image
             game.addGameItem(enemy);
             enemy.velocityX = -1; // Move the enemy 1 pixel to the left
             
 
             // This function detects if the enemy collides with Halle and executes health decrease
             enemy.onPlayerCollision = function() {
             game.changeIntegrity(-75) // Decreases your health
             console.log('The enemy has hit Halle');
             enemy.fadeOut();
             };
 
             // This functions detects if the projectile collides with Halle and it will increase the score
             enemy.onProjectileCollision = function(){
                     game.increaseScore(100); // This increases the players score by 100 if they eliminate the enemy
                     enemy.shrink(); // This allows the enemy to shrink once shot by Halle Bot
             };       
         }

        function createReward(x, y){
            
            

            // Mario Coin Reward
            var reward = game.createGameItem('reward',15); // Creates the enemy game item and stores it in the varibale enemy
            var rewardImage = draw.bitmap('../../../Images/mariocoin.png'); // Draws a red square and stores it in the variable blueSquare
            rewardImage.x = -20; // Align the square hitzone x
            rewardImage.y = -20; // Align the square hitzone y
            reward.addChild(rewardImage);

            reward.x = x;
            reward.y = y;
            rewardImage.scaleX = 0.05; // Controls the x scale of the image
            rewardImage.scaleY = 0.05; // Controls the x scale of the image
            game.addGameItem(reward);
            reward.velocityX = -2; // Move the reward 1 pixel to the left 

         
            
            // This function detects if the reward collides with Halle and executes health decrease
            reward.onPlayerCollision = function() {
                game.changeIntegrity(100) // Decreases your health
                console.log('The reward has hit Halle');
                reward.fadeOut(); // This allows the enemy to fade out once shot by Halle Bot
                game.increaseScore(50); // This increases the player score by 50 when a reward is collected
            };

        
        }
        
       
        // These loops help to display the images on the live server

        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if (gameItem.type === "spike"){
                createSpike(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "enemy2"){
                createEnemy2(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "pipe"){
                createPipe(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "thwomp"){
                createThwomp(gameItem.x, gameItem.y);
            }

        }
    
    
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
