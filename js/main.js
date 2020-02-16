
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
    deployLines(); 
    gameEngine = new Engine(zone);
    // We call the gameLoop method to start the game
    gameEngine.gameLoop();
    //Active road line generator
}

//KEY HANDLER
const keydownHandler = event => {
    if (event.repeat) { return }
    if (deaders || paused){
    }
    else if (event.code === "KeyA") {
        gameEngine.player.moveLeft();
    }
    else if (event.code === "KeyD") {
        gameEngine.player.moveRight();
    }
    //MUSIC TOGGLE  **maybe replace the following with switch function**
    if (event.code === "KeyE") {
        if(music.paused) {
        music.play();
        } else {
            music.pause();
        }
    } 
    //PAUSE
    if (event.code === "KeyQ") {
        if (deaders){
        } else if (paused === true) {
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
    //RESTART
    if (event.code === "KeyR") {
        if(deaders){
            restartHandle();
        }
    }
    //SPEED UP
    if (event.code === "KeyW") {
        // if (!deaders && !paused){
            timePasser();
            deployLines();
            console.log('faster');
        // }
    }
}

//SLOW DOWN
speedHandler = (e) => {
    if (event.repeat) { return };
    if (event.code === "KeyW") {
        clearInterval(clock);
        clearInterval(loop);
        console.log('slower');
    }
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", speedHandler);
startTheGame();




