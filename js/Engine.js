// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time

class Engine {
    constructor(theRoot) {
        this.root = theRoot;
        // Create Player.
        this.player = new Player(this.root);
        // Create Enemy Tracker
        this.enemies = [];

        // this.lineArray = [];
        
    }
    //  - Updates the enemy positions
    //  - Detects a collision between the player and any enemy
    //  - Removes enemies that are too low from the enemies array
    gameLoop = () => {
        if (paused) {return};
        if (this.lastFrame === undefined) this.lastFrame = timeElapsed;
        let timeDiff = timeElapsed - this.lastFrame;
        this.lastFrame = timeElapsed;

        
        // for (let i=1 ; i < 10 ; i++){
        //     this.lineArray.push(new Roadline(this.root, i));
        // }
        lineArray.forEach(line => {
            line.update(timeDiff); //run this for lines too
        });
        // this.lineArray = this.lineArray.filter(line => {
        //     return !line.destroyed; //run this for lines too
        // });

        // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
        // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
        this.enemies.forEach(enemy => {
            enemy.update(timeDiff); 
        });
        // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed; 
        });
        // Adding of enemies until we have enough enemies.
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
                // console.log(this.player.lives);
            } else {
                console.log('dead');
                deaders = true;
                result.style.display = 'flex';
                resButton.addEventListener('click', restartHandle);
                return;
            }
        }

        setTimeout(this.gameLoop, 20);
    }

    //Function to check player status
    isPlayerDead = () => {
        let dead = false;
        this.enemies.forEach(enemy => {
            if(((enemy.y + (ENEMY_HEIGHT-1)) >= this.player.y) && this.player.x === enemy.x){
                // if(this.player.lives === 0) {
                    // console.log('ded');
                    // console.log(this.player.lives);
                    dead = true;
                // } else {
                    // console.log('sub');
                    // this.player.lives --;
                }
            // }
        });
        return dead;
    };
    
}   
