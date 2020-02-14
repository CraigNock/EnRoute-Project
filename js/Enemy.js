// The Enemy class will contain information about the enemy such as
function randy(min, max){ 
            let rand = Math.floor((Math.random()*(max - min)) + min);
            return rand;
        };// its position on screen. It will also provide methods for updating
// and destroying the enemy.
class Enemy {
    // The constructor takes 2 arguments.
    // - theRoot refers to the parent DOM element.
    //   We need a way to add the DOM element we create in this constructor to our DOM.
    // - enemySpot is the position of the enemy (either 0, 1, 2, 3 or 4)
    // Since the constructor takes 2 parameters
    // and the 2 parameters provide important information, we must supply 2 arguments to "new" every time we
    // create an instance of this class.
    constructor(theRoot, enemySpot) {
        
        this.root = theRoot;
        this.spot = enemySpot;
        this.x = enemySpot * ENEMY_WIDTH;
        this.y = -ENEMY_HEIGHT;

        this.destroyed = false;
        
        this.speed = Math.random() / .5 + 0.5;
 
        this.domElement = document.createElement('img');
        
        let imageNum = randy(1,17);
        this.domElement.src = `./images/cars/${imageNum}.png`;

        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.height = ENEMY_HEIGHT;
        this.domElement.style.width = ENEMY_WIDTH;
        this.domElement.style.zIndex = 5;

        theRoot.appendChild(this.domElement);
    }

    
    // timeDiff refers to the number of milliseconds since the last update was called. 
    update(timeDiff) {
        // We update the y property of the instance in proportion of the amount of time
        // since the last call to update. We also update the top css property so that the image
        // is updated on screen
        this.y = this.y + timeDiff * this.speed;
        this.domElement.style.top = `${this.y}px`;
        // If the y position of the DOM element is greater than the GAME_HEIGHT then the enemy is at the bottom
        // of the screen and should be removed. We remove the DOM element from the root DOM element and we set
        // the destroyed property to indicate that the enemy should no longer be in play
        if (this.y > GAME_HEIGHT) {
                this.root.removeChild(this.domElement);
                this.destroyed = true;
        }
    }
}