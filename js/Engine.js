// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time
class Engine {
    // The constructor has one parameter. It will refer to the DOM node that we will be adding everything to.
    // You need to provide the DOM node when you create an instance of the class
    constructor(theRoot) {
        this.root = theRoot;
        // We create our player.
        this.player = new Player(this.root);
        // Initially, we have no enemies in the game. The enemies property refers to an array
        // that contains instances of the Enemy class
        this.enemies = [];
        
        // addBackground(this.root); // REMOVED, UNNEEDED
        
    }


    
    // The gameLoop will run every few milliseconds. It does several things
    //  - Updates the enemy positions
    //  - Detects a collision between the player and any enemy
    //  - Removes enemies that are too low from the enemies array
    gameLoop = () => {
        // This code is to see how much time, in milliseconds, has elapsed since the last
        // time this method was called.
        // (new Date).getTime() evaluates to the number of milliseconds since January 1st, 1970 at midnight.
        if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime();
        let timeDiff = (new Date).getTime() - this.lastFrame;
        this.lastFrame = (new Date).getTime();
        // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
        // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
        this.enemies.forEach(enemy => {
            enemy.update(timeDiff);
        });
        // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
        // We use filter to accomplish this.
        // Remember: this.enemies only contains instances of the Enemy class.
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed;
        });
        // We need to perform the addition of enemies until we have enough enemies.
        while (this.enemies.length < MAX_ENEMIES) {
            // We find the next available spot and, using this spot, we create an enemy.
            // We add this enemy to the enemies array 
            const spot = nextEnemySpot(this.enemies);
            this.enemies.push(new Enemy(this.root, spot));
        }
        //CHECKS IF PLAYER IS DEAD
        if (this.isPlayerDead()) {
            if(this.player.lives !== 0) {
                this.player.lives --;
                console.log(this.player.lives);
            } else {
                deaders = true;
                result.style.display = 'flex';
                resButton.addEventListener('click', restartHandle);
                return;
            }
            // return;
        }
        // console.log(this.enemies);
        // console.log(this.player);

        setTimeout(this.gameLoop, 20);
    }


    isPlayerDead = () => {
        let dead = false;
        this.enemies.forEach(enemy => {
            if(((enemy.y + (ENEMY_HEIGHT-1)) >= this.player.y) && this.player.x === enemy.x){
                // if(this.player.lives === 0) {
                    // console.log('ded');
                    // console.log(this.player.lives);
                    dead = true;
                // } else {
                    console.log('sub');
                    // this.player.lives --;
                }
            // }
        });
        return dead;
    };
}


