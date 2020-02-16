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
// music.controls = true;
music.volume = 0.5;
music.src = 'sounds/gasgasgascut.mp3';
document.querySelector('.border-left').appendChild(music);


//TIME INCREMENTER
timePasser = () =>{
    console.log('time activated');
    clock = setInterval( () => {
    timeElapsed ++;}
    , 1)
};

//RESTART BUTTON & HANDLER
const result = document.createElement('div');
result.id = 'result';
result.className = 'result-box';
result.innerText = 'Game Over';
body.appendChild(result);

const resButton = document.createElement('button');
resButton.id = 'resButton';
resButton.className = 'res-button';
resButton.innerText = '[R] Restart';
document.querySelector('#result').appendChild(resButton);

restartHandle = (e) => {
    resButton.removeEventListener('click', restartHandle);
    result.style.display = 'none';
    startTheGame();
}