var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robots Rule",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY -50 },
                { "type": "sawblade", "x": 600, "y": groundY -50 },
                { "type": "sawblade", "x": 900, "y": groundY -50 },

                { "type": "enemy", "x": 400, "y": groundY -50 },
                { "type": "enemy", "x": 600, "y": groundY -50 },
                { "type": "enemy", "x": 900, "y": groundY -50 },

                { "type": "reward", "x": 200, "y": groundY -50 },
                { "type": "reward", "x": 300, "y": groundY -50 },
                { "type": "reward", "x": 500, "y": groundY -50 },
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

     

        function createSawBlade(x, y){
            var hitZoneSize = 25; //Creates the size of the hitzone
            var damageFromObstacle = 10; //Setting how much damage the object will inflict
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //Creates the obstable itself
            sawBladeHitZone.x = x; // The x value of the hitzone
            sawBladeHitZone.y = y; // The y value of the hitzone
            game.addGameItem(sawBladeHitZone); // Adds the hitzone to the game
            
            var obstacleImage = draw.bitmap('../../../Images/spikeobstaclemario.png'); // Draws the image and stores it in the viarble obstacleImagine
            sawBladeHitZone.addChild(obstacleImage); // Adds the image to the hitzone so we can see it
            obstacleImage.x = -25; // Lines up the x of the imgage with the hitzone
            obstacleImage.y = -25; // Lines up the y of the imgage with the hitzone 
            sawBladeHitZone.rotationalVelocity = 10; // Rotate the enemy image by 10 pixels

            var obstacleImage = draw.bitmap('../../../Images/spikeobstabclemario.png'); // Draws the image and stores it in the viarble obstacleImagine
            sawBladeHitZone.addChild(obstacleImage); // Adds the image to the hitzone so we can see it
            obstacleImage.x = -25; // Lines up the x of the imgage with the hitzone
            obstacleImage.y = -25; // Lines up the y of the imgage with the hitzone 
            sawBladeHitZone.rotationalVelocity = 10; // Rotate the enemy image by 10 pixels
        }
    
        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',15); // Creates the enemy game item and stores it in the varibale enemy
            var enemyImage = draw.bitmap('../../../Images/booghostmario.png'); // Draws a Mario Ghost and stores it in the variable enemyImage
            enemyImage.x = -35; // Align the square hitzone x
            enemyImage.y = -25; // Align the square hitzone y
            enemy.addChild(enemyImage);

            enemy.x = x;
            enemy.y = y;
            enemyImage.scaleX = 0.10;
            enemyImage.scaleY = 0.10;
            game.addGameItem(enemy);
            enemy.velocityX = -1; // Move the enemy 1 pixel to the left


            var enemy = game.createGameItem('enemy',15); // Creates the enemy game item and stores it in the varibale enemy
            var enemyImage = draw.bitmap('../../../Images/goombamushroom.png'); // Draws a Mario Mushroom and stores it in the variable enemyImage
            enemyImage.x = -30; // Align the square hitzone x
            enemyImage.y = -25; // Align the square hitzone y
            enemy.addChild(enemyImage);

            enemy.x = x;
            enemy.y = y;
            enemyImage.scaleX = 0.08;
            enemyImage.scaleY = 0.08;
            game.addGameItem(enemy);
            enemy.velocityX = -1; // Move the enemy 1 pixel to the left


            var enemy = game.createGameItem('enemy',15); // Creates the enemy game item and stores it in the varibale enemy
            var enemyImage = draw.bitmap('../../../Images/piranhaplantmario.png'); // Draws a Mario Piranha Plant and stores it in the variable enemyImage
            enemyImage.x = -30; // Align the square hitzone x
            enemyImage.y = -25; // Align the square hitzone y
            enemy.addChild(enemyImage);

            enemy.x = x;
            enemy.y = y;
            enemyImage.scaleX = 0.08;
            enemyImage.scaleY = 0.08;
            game.addGameItem(enemy);
            enemy.velocityX = -1; // Move the enemy 1 pixel to the left
            

            // This function detects if the enemy collides with Halle and executes health decrease
            enemy.onPlayerCollision = function() {
            game.changeIntegrity(-25) // Decreases your health
            console.log('The enemy has hit Halle');
            enemy.fadeOut();
            };

            // This functions detects if the projectile collides with Halle and it will increase the score
            enemy.onProjectileCollision = function(){
                    game.increaseScore(25);
                    enemy.shrink();
            };       
        }

        function createReward(x, y){
            var reward = game.createGameItem('reward',15); // Creates the enemy game item and stores it in the varibale enemy
            var rewardImage = draw.bitmap('../../../Images/mariocoin.png'); // Draws a red square and stores it in the variable blueSquare
            rewardImage.x = -20; // Align the square hitzone x
            rewardImage.y = -20; // Align the square hitzone y
            reward.addChild(rewardImage);

            reward.x = x;
            reward.y = y;
            rewardImage.scaleX = 0.05;
            rewardImage.scaleY = 0.05;
            game.addGameItem(reward);
            reward.velocityX = -1; // Move the reward 1 pixel to the left

            
            var reward = game.createGameItem('reward',15); // Creates the enemy game item and stores it in the varibale enemy
            var rewardImage = draw.bitmap('../../../Images/mariomushroom.png'); // Draws a red square and stores it in the variable blueSquare
            rewardImage.x = -20; // Align the square hitzone x
            rewardImage.y = -20; // Align the square hitzone y
            reward.addChild(rewardImage);

            reward.x = x;
            reward.y = y;
            rewardImage.scaleX = 0.05;
            rewardImage.scaleY = 0.05;
            game.addGameItem(reward);
            reward.velocityX = -1; // Move the reward 1 pixel to the left 
            
            // This function detects if the reward collides with Halle and executes health decrease
            reward.onPlayerCollision = function() {
                game.changeIntegrity(-25) // Decreases your health
                console.log('The reward has hit Halle');
                reward.fadeOut();
                game.increaseScore(25);
            };

        
        }
        
       
        

        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if (gameItem.type === "sawblade"){
                createSawBlade(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
            }

            if (gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
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
