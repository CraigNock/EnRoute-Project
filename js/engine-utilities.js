
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
