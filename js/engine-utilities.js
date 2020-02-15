//SPOT HANDLER FOR ENEMIES
const nextEnemySpot = enemies => {
    const enemySpots = GAME_WIDTH / ENEMY_WIDTH;
    const spotsTaken = [false, false, false, false, false, false, false, false, false, false]; //need to modify for larger size?
    enemies.forEach(enemy => {
        spotsTaken[enemy.spot] = true;
    });
    
    let candidate = undefined;
    while (candidate === undefined || spotsTaken[candidate]) {
        candidate = Math.floor(Math.random() * enemySpots);
    }
    return candidate;
}

//MUSIC ADDITION
const music = document.createElement('AUDIO');
music.controls = true;
music.src = 'sounds/gasgasgas.mp3';
document.querySelector('.border-left').appendChild(music);


//TIME INCREMENTER
timePasser = () =>{
    console.log('time activated');
    clock = setInterval( passer = () => {
    timeElapsed ++;}
    , 1)
};

//RESTART BUTTON & HANDLER
const result = document.createElement('div');
result.id = 'result';
result.className = 'result-box';
// result.style.position = 'absolute';
// result.style.display = 'none';
// result.style.flexDirection = 'column';
// result.style.justifyContent = 'center';
// result.style.alignItems = 'center';
// result.style.top = '10vh';
// result.style.zIndex = '50';
// result.style.backgroundColor = 'grey';
// result.style.width = '15vw';
// result.style.height = '10vw';
// result.style.border = '5px solid white';
// result.style.borderRadius = '5px';
// result.style.fontWeight = '900';
result.innerText = 'Game Over';
body.appendChild(result);

const resButton = document.createElement('button');
resButton.id = 'resButton';
resButton.className = 'res-button';
resButton.innerText = 'Restart';
document.querySelector('#result').appendChild(resButton);

restartHandle = (e) => {
    resButton.removeEventListener('click', restartHandle);
    result.style.display = 'none';
    startTheGame();
}