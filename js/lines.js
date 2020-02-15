
const borderLeft = document.querySelector('.border-left');


// let scoreboard = new Text(borderLeft, '50px', '0px');
// scoreboard.domElement.innerText = 'SCORE';
// scoreboard.domElement.style.backgroundColor = 'black';

class Roadline {
    constructor(root, x){
        this.root = root;
        
        this.x = x * 70;
        this.y = 50;

        this.destroyed = false;
        
        this.speed = 1.75;

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
            this.root.removeChild(this.domElement);
            this.destroyed = true;
        }
    }
}

let lineArray = [];

deployLines = () => {
    let loop = setInterval(loopFunc = () => {
        for (let i=1 ; i < 10 ; i++){
        lineArray.push(new Roadline(zone, i));
    }
    // lineArray.forEach(line => {
    //     line.update(2); 
    // });
    // lineArray = lineArray.filter(line => {
    //     return !line.destroyed; 
    // });
    }, 1000);
}


