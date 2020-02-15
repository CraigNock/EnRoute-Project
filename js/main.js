
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

//START GAME FUNCTION
startTheGame = () => {
    //Clears the old game
    zone.innerHTML = '';
    //resets timer
    clearInterval(clock);
    timeElapsed = 0;
    timePasser();
    //removes dead condition
    deaders = false;
    gameEngine = new Engine(zone);
    // We call the gameLoop method to start the game
    gameEngine.gameLoop();
    //Active road line generator
    deployLines(); 
}

//KEY HANDLER
const keydownHandler = event => {
    if (deaders || paused){
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
        if (deaders){

        } else if(paused === true) {
            timePasser();
            console.log(paused);
            paused = false;
            console.log(paused);
            gameEngine.gameLoop();
            console.log('unpause');
        } else {
            clearInterval(clock);
            paused = true;
            console.log('pause');
        }
        
    }
}

document.addEventListener("keydown", keydownHandler);
startTheGame();