
const result = document.createElement('div');
result.id = 'result';
result.style.position = 'absolute';
result.style.display = 'none';
result.style.flexDirection = 'column';
result.style.justifyContent = 'center';
result.style.alignItems = 'center';
result.style.top = '10vh';
result.style.zIndex = '50';
result.style.backgroundColor = 'grey';
result.style.width = '15vw';
result.style.height = '10vw';
result.style.border = '5px solid white';
result.style.borderRadius = '5px';
result.innerText = 'You Have Perished';
result.style.fontWeight = '900';
body.appendChild(result);

const resButton = document.createElement('button');
resButton.id = 'resButton';
resButton.innerText = 'Restart';
resButton.style.margin = '1rem 0 0 0';
resButton.style.color = 'whitesmoke';
resButton.style.backgroundColor = 'black';
document.querySelector('#result').appendChild(resButton);


restartHandle = (e) => {
    resButton.removeEventListener('click', restartHandle);
    result.style.display = 'none';
    startTheGame();
}