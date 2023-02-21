var player = document.querySelector('.player');
var coin = document.querySelector('.coin');
var obstacle = document.querySelector('.obstacle');
var score = document.getElementById('score');
var currentScore = 0;

function movePlayer(event) {
  if (event.keyCode === 37) {
    // left arrow
    player.style.left = parseInt(player.style.left) - 5 + 'px';
  } else if (event.keyCode === 38) {
    // up arrow
    player.style.bottom = parseInt(player.style.bottom) + 5 + 'px';
  } else if (event.keyCode === 39) {
    // right arrow
    player.style.left = parseInt(player.style.left) + 5 + 'px';
  } else if (event.keyCode === 40) {
    // down arrow
    player.style.bottom = parseInt(player.style.bottom) - 5 + 'px';
  }

  if (checkCollision(player, coin)) {
    currentScore++;
    score.innerText = currentScore;
    moveCoin();
  }

  if (checkCollision(player, obstacle)) {
    alert('Game over!');
    location.reload();
  }
}

function checkCollision(obj1, obj2) {
  var rect1 = obj1.getBoundingClientRect();
  var rect2 = obj2.getBoundingClientRect();

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}

function moveCoin() {
  coin.style.top = Math.floor(Math.random() * 360) + 'px';
  coin.style.left = Math.floor(Math.random() * 360) + 'px';
}

document.addEventListener('keydown', movePlayer);
moveCoin();
