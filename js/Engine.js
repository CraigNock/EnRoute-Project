// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time

let lineArray = undefined;

class Engine {
    constructor(theRoot) {
        this.root = theRoot;
        // Create Player.
        this.player = new Player(this.root);
        // Create Enemy Tracker
        this.enemies = [];

        lineArray = [];
        
    }

    gameLoop = () => {
        if (paused) {return};
        if (this.lastFrame === undefined) this.lastFrame = timeElapsed;
        let timeDiff = timeElapsed - this.lastFrame;
        this.lastFrame = timeElapsed;

        //Line Updating *note:consolidate into function that can be called on enemies and trees too
        lineArray.forEach(line => {
            line.update(timeDiff); 
        });
        lineArray = lineArray.filter(line => {
            return !line.destroyed; 
        });

        this.enemies.forEach(enemy => {
            enemy.update(timeDiff); 
        });
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed; 
        });
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
                clearInterval(loop);
                
                deaders = true;
                new Audio('sounds/crash2.mp3').play();
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

                    dead = true; //***comment out this to make invincible***
                    
                // } else {
                    // console.log('sub');
                    // this.player.lives --;
                }
            // }
        });
        return dead;
    };
    
}   
