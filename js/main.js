// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of \`"app"\` 

//Styling 'app' div to act as game "board" , removes need for background function
const app = document.getElementById("app");
app.style.overflow = 'hidden';
app.style.position = 'relative';
app.style.height = `${GAME_HEIGHT}px`;
app.style.width = `${GAME_WIDTH}px`;
app.style.backgroundImage = 'url("./images/asphalt.png")';
app.style.backgroundSize = 'cover';

//active game zone, so finished game elements can be cleared easily
const zone = document.createElement('div');
zone.id = 'zone';
zone.style.position = 'relative';
zone.style.height = `${GAME_HEIGHT}px`;
zone.style.width = `${GAME_WIDTH}px`;
zone.style.backgroundColor = 'transparent';
app.appendChild(zone);


const music = document.createElement('AUDIO');
music.controls = true;
music.src = 'sounds/gasgasgas.mp3';
document.querySelector('.border-left').appendChild(music);

startTheGame = () => {
    //Clears the old game
    zone.innerHTML = '';
    //resets timer
    timeElapsed = 0;
    let paused = false;
    timePasser();
    //removes dead condition
    deaders = false;
    const gameEngine = new Engine(zone);
    // music.autoplay = true;
    const keydownHandler = event => {
        if (deaders){
        }
        else if (event.code === "ArrowLeft") {
            gameEngine.player.moveLeft();
        }
        else if (event.code === "ArrowRight") {
            gameEngine.player.moveRight();
        }
        //music toggle
        if (event.code === "KeyM") {
            
            if(music.paused) {
            music.play();
            } else {
                music.pause();
            }
        } 
        if (event.code === "KeyP") {
            if(paused === false) {
                clearInterval(clock);
                paused = true;
            } else {
                paused = false;
                timePasser();
            }
            
        }
    }

    document.addEventListener("keydown", keydownHandler);

    // We call the gameLoop method to start the game
    gameEngine.gameLoop();
}

startTheGame();