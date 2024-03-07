const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const spaceKey = document.querySelector('.space-key');

let currentScore = 0;
let currentHighScore = 0;
let isPlaying = false;
let timer = 5;

document.addEventListener('keydown', function(e) {
    if (e.key == "Enter" && !isPlaying) {
        isPlaying = true;
        let gameTimer = setInterval(function() {
            message.textContent = "Time Left : " + timer;
            if (timer<=0) {                
                isPlaying = false;
                message.textContent = "Game Over! Press [ Enter ] to Play Again . . .";
                if (currentScore > currentHighScore) {
                    currentHighScore = currentScore;
                    highScore.textContent = currentHighScore;
                }
                currentScore = 0;
                score.textContent = currentScore;
                timer=5;
                clearInterval(gameTimer);
            }
            timer--;
        }, 1000);
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key == " " && isPlaying) {
            spaceKey.style.backgroundImage = 'url("./assets/spaceKey.png")';
    }    
});

document.addEventListener('keydown', function(e) {
    if (e.key == " " && isPlaying) {
            spaceKey.style.backgroundImage = 'url("./assets/spaceKeyPressed.png")';
            currentScore++;
            score.textContent = currentScore;
    }    
});
