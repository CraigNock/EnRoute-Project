// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of \`"app"\` 

//Styling 'app' div to act as game "board" , removes need for background function
const app = document.getElementById("app");
app.style.overflow = 'hidden';
app.style.position = 'relative';
app.style.height = `${GAME_HEIGHT}px`;
app.style.width = `${GAME_WIDTH}px`;
app.style.backgroundImage = 'url("./images/wood.jpg")';
app.style.backgroundSize = 'cover';

//active game zone, so finished game elements can be cleared easily
const zone = document.createElement('div');
zone.id = 'zone';
zone.style.position = 'relative';
zone.style.height = `${GAME_HEIGHT}px`;
zone.style.width = `${GAME_WIDTH}px`;
zone.style.backgroundColor = 'transparent';
app.appendChild(zone);


startTheGame = () => {
    //Clears the old game
    zone.innerHTML = '';

    const gameEngine = new Engine(zone);

    const keydownHandler = event => {
        if (event.code === "ArrowLeft") {
            gameEngine.player.moveLeft();
        }
        if (event.code === "ArrowRight") {
            gameEngine.player.moveRight();
        }
    }
    document.addEventListener("keydown", keydownHandler);

    // We call the gameLoop method to start the game
    gameEngine.gameLoop();
}

startTheGame();