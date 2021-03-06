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

//Random Generator (used for cars)
function randy(min, max){ 
    let rand = Math.floor((Math.random()*(max - min)) + min);
    return rand;
};

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
        // console.log('tick');
        timeElapsed ++;
        //progress
        
    }, 1)
};

//BOOST
timeBooster = () =>{
    console.log('time boosted');
    boost = setInterval( () => {
        // console.log('tick');
        timeElapsed ++;
    }, 1)
};


progBoost = () => {
    progressBoost = setInterval( () =>{
        progressCount++;
    }, 500);
};



restartHandle = (e) => {

    resButton.removeEventListener('click', restartHandle);
    result.style.display = 'none';
    startTheGame();
}

//TIMER
winTimer = () => {
    timeLeft.innerText = timeGiven;
    progress.innerText = progressCount;

    countdown = setInterval(() => {
    timeLeft.innerText =  `${timeLeft.innerText -1}`;
    progress.innerText =  `${progressCount}`;
    timeGiven --;
    progressCount++;

    if(progressCount >= 101) {
        switchText('WINNER!');
        endClear();
        console.log('win');
    };

    }, 1000);
}

endClear = () => {
    clearInterval(clock);
    clearInterval(loop);
    clearInterval(countdown);
        
    keydead = true;
    paused = true;
    result.style.display = 'flex';
    resButton.addEventListener('click', restartHandle);
}


switchText = (text) => {
    document.getElementById('result').removeChild(resButton);
    result.innerText = `${text}`;
    document.getElementById('result').appendChild(resButton);
}