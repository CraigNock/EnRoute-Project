
const borders = document.getElementById('border');


scroll = () => {
    
        borders.style.top = '0';
        borders.style.top = '32px';
        borders.style.top = '0';


}

class Roadline {
    constructor(theRoot){
        this.root = theRoot;
        this.spot = enemySpot;
        this.x = enemySpot * ENEMY_WIDTH;
        this.y = -ENEMY_HEIGHT;

        this.destroyed = false;
        
        this.speed = Math.random() / 2 + 0.25;
 
        this.domElement = document.createElement('div');
        this.domElement.className = 'line';

        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.height = 50px;
        this.domElement.style.width = 3px;
        this.domElement.style.zIndex = 2;
        
        theRoot.appendChild(this.domElement);
    }
}