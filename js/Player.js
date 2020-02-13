
// class Entity {
//     render(){
//         this.domElement = document.createElement("img");
//         this.domElement.style.position = 'absolute';
//         this.domElement.style.left = `${this.x}px`;
//         this.domElement.style.top = `${this.y}px`;
//         root.appendChild(this.domElement);
//     }
// }




class Player {
    // The constructor takes one parameter. This parameter refers to the parent DOM node.
    // We will be adding a DOM element to this parent DOM node.
    constructor(root) {
        // super(root);
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        
        this.domElement = document.createElement("img");
        this.domElement.src = 'images/player.png';
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.zIndex = '10';
        root.appendChild(this.domElement);
    }
    
    moveLeft() {
        if (this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
    }
    moveRight() {
        if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
    }
}