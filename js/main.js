
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
    //resets timers
    timeElapsed = 0;
    timeGiven = 80; //always less than 100 to force use of boost
    progressCount = 0;
    //start timers
    winTimer();
    timePasser();
    //removes dead condition
    keydead = false;
    paused = false;
    //Active road line generator
    deployLines(); 
    // makeTrees(); ///FIX
    //create game
    gameEngine = new Engine(zone);
    // start the game
    gameEngine.gameLoop();
    
}

//KEY HANDLER  **note to self: replace all this with SWITCH function**
const keydownHandler = event => {
    if (event.repeat) { return }
    //STEERING
    if (keydead || paused){
    }
    else if (event.code === "KeyA") {
        gameEngine.player.moveLeft();
    }
    else if (event.code === "KeyD") {
        gameEngine.player.moveRight();
    }
    //MUSIC TOGGLE  
    if (event.code === "KeyE") {
        if(music.paused) {
            music.play();
        } else {
            music.pause();
        }
    } 
    //PAUSE
    if (event.code === "KeyQ") {
        if (!keydead && paused ) {
            timePasser();
            winTimer();
            paused = false;
            gameEngine.gameLoop();
            console.log('unpause');
        } else {
            clearInterval(clock);
            clearInterval(countdown);
            clearTimeout(winCond);
            paused = true;
            console.log('pause');
        }
        
    }
    //RESTART
    if (event.code === "KeyR") {
        if(keydead){
            restartHandle();
        }
    }
    //BOOST SPEED UP
    if (event.code === "KeyW") {
        // if (!keydead && !paused){
            timeBooster(); //creates extra interval 'clock'
            progBoost(); //creates extra progress interval 'progressBoost
            deployLines(); //creates extra interval 'loop'
            console.log('faster');
        // }
    }
}

//BOOST SLOW DOWN
speedHandler = (e) => {
    if (event.repeat) { return };
    if (event.code === "KeyW") {
        clearInterval(boost);
        clearInterval(progressBoost);
        clearInterval(loop);
        console.log('slower');
    }
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", speedHandler);

//stretch :implement start screen and maybe intro gif or something.
startTheGame();




