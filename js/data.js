// In this file we have some data that the other source files will use.

const GAME_WIDTH = 700;
const GAME_HEIGHT = 600;


const ENEMY_WIDTH = 70;
const ENEMY_HEIGHT = 120;
const MAX_ENEMIES = 5;

const PLAYER_WIDTH = 70;
const PLAYER_HEIGHT = 100;

let deaders = false;
let gameEngine = undefined;

//related to timing
let paused = false;
let timeElapsed = 0;
let clock = undefined;

//BODY BUILDING
const body = document.querySelector('body')
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.aligntItems = 'center';
body.style.margin = '0';
body.style.backgroundColor = 'black';

const borderLeft = document.querySelector('.border-left');

//related to win timer
let countdown = undefined;
let winCond = undefined;
let timeGiven = undefined;
let progressCount = undefined;
let timeLeft = document.getElementById('timeleft');
let progress = document.getElementById('progress');

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