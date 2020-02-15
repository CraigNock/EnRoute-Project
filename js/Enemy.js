
function randy(min, max){ 
            let rand = Math.floor((Math.random()*(max - min)) + min);
            return rand;
        };

// enemy position on screen. It will also provide methods for updating and destroying the enemy.
class Enemy {
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
        ///possibly consolidate in a parent method?
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.height = ENEMY_HEIGHT;
        this.domElement.style.width = ENEMY_WIDTH;
        this.domElement.style.zIndex = 5;

        theRoot.appendChild(this.domElement);
    }

    update(timeDiff) {

        this.y = this.y + timeDiff * this.speed;
        this.domElement.style.top = `${this.y}px`;

        if (this.y > GAME_HEIGHT) {
                this.root.removeChild(this.domElement);
                this.destroyed = true;
        }
    }
}