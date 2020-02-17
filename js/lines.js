
// const borderLeft = document.querySelector('.border-left');

// let scoreboard = new Text(borderLeft, '50px', '0px');
// scoreboard.domElement.innerText = 'SCORE';
// scoreboard.domElement.style.backgroundColor = 'black';

class Roadline {
    constructor(root, x){
        this.root = root;
        this.x = x * 70;
        this.y = -110;
        this.destroyed = false;
        this.speed = 2;

        this.domElement = document.createElement('div');
        this.domElement.className = 'line';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.root.appendChild(this.domElement);
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
        this.domElement.style.top = `${this.y}px`;

        if (this.y > GAME_HEIGHT) {
            this.destroyed = true;
            this.root.removeChild(this.domElement);
        }
    }
    
}


let loop = undefined;
let trees = undefined;

deployLines = () => {
    loop = setInterval( () => {
        for (let i=1 ; i < 10 ; i++){
        lineArray.push(new Roadline(zone, i));
        }
        
    }, 400);
}

//varible to trigger deploy, manipulate extra with boost


class Tree extends Roadline {
    constructor(root,x){
        super(root,x);
}}
makeTrees = () => {
    trees = setInterval( () => {
        treeArray.push(new Tree(borderLeft, 1));
        }
    , 400)
};
