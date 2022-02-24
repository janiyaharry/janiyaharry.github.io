var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#DDDDDD'); // Creates a variable called backgroundFill and store a rectangle that acts as our background
            background.addChild(backgroundFill); // Adds the background to the canvas so we can see it
            
            // TODO: 3 - Add a moon and starfield
            
            for (var i = 0; i <= 100; i++) {
            var circle = draw.circle(3,'white','LightGray',2);
            circle.x = canvasWidth*Math.random(); // Creates a variable called circle that holds each circle
            circle.y = groundY*Math.random(); // Multiples groundY* a random decimal between .1 and .99 and assigns it to circle.y
             background.addChild(circle); // Adds the circle to the background
             }

            var moon = draw.bitmap('img/moon.png');// A variable moon that holds the bitmap drawing of the moon
            moon.x = canvasWidth - 230; // Hold the x value of the moon (left an right)
            moon.y = groundY - 400; // Holds the y value of moon (up and down)
            moon.scaleX = 0.4; // Changes the x scale of the moon
            moon.scaleY = 0.4; // Changes the y scale of the moon
            background.addChild(moon); // Add the moon to the background
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
                
                 // Everytime this loop runs, it creates a building with an x and y vlaue and pushes it ot the building array
            
                for(var i = 0; i < 5; i ++) {
                var buildingHeight = 300; // Declare a variable called buildingHeight that holds the height of thee building in pixels
                var building = draw.rect(75,buildingHeight,'LightGray','Black', 1); // Declare a varibale called building which will hold 
                building.x = 200*i; // Adds 200 pixels to the x value every time the loop runs 
                building.y = groundY-buildingHeight; // Sets the building's y position by the subtracting the height of the building from the groundY
                background.addChild(building); // Adds the building to the background so we can see it 
                buildings.push(building); // Push the building data to the buildings array and store it as an index
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = canvasWidth - 1000;
            tree.y = groundY - 250;
            tree.scaleX = 0.7;
            tree.scaleY = 0.7;
            background.addChild(tree);

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1; // Takes the current value of tree.x and subtracts 1 pixel 60/second to move the tree to the left
            if(tree.x < -200) { // If the tree's x value is less than -200 pixls then reassign canvasWidth to the tree's x position
            tree.x = canvasWidth;
}
            
            // TODO 5: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
