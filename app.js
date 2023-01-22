const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
// 5 - pacman
// console.log(Math.sqrt(layout.length));
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const classes = [
  "pac-dot",
  "wall",
  "ghost",
  "power-pellet",
  "empty",
  "pacman",
  "black",
  "scared",
  "lair",
];
const ghostAllDead = "WIN! ALL GHOSTS ARE DEAD!";
const width = Math.sqrt(layout.length);
const container = document.querySelector(".container");
let nodes = [];
layout.forEach((e) => {
  let div = document.createElement("div");
  div.classList.add(classes[e]);
  container.appendChild(div);
  nodes.push(div);
});
let pacmanCurrentIndex = 490;
let score = 0;
h2.innerHTML = score;
//add pacman into the board
nodes[pacmanCurrentIndex].classList.add(classes[5]);
const arrowKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Space"];
let degree = 0;
let deadGhost = 0;
let powerPelletFinish = [];
//arrow key, move pacman
function movePacman(e) {
  let key = e.key;
  let newIndex = 0;

  switch (key) {
    case arrowKeys[0]:
      newIndex = pacmanCurrentIndex - width;
      degree = -90;
      break;
    case arrowKeys[1]:
      newIndex = pacmanCurrentIndex + 1;
      degree = 0;
      break;
    case arrowKeys[2]:
      newIndex = pacmanCurrentIndex + width;
      degree = 90;
      break;
    case arrowKeys[3]:
      newIndex = pacmanCurrentIndex - 1;
      degree = -180;
      break;
  }
  //left shortcut 364 to 390, right shortcut 391 to 365
  if (newIndex === 364) {
    newIndex = 390;
  }
  if (newIndex === 391) {
    newIndex = 365;
  }
  //rotate style
  rotateStyle = `transform: rotate(${degree}deg)`;
  //while no wall, pacman move
  if (!nodes[newIndex].classList.contains(classes[1])) {
    nodes[pacmanCurrentIndex].classList.remove(classes[5]);
    nodes[newIndex].classList.add(classes[5]);
    //while pacman is black
    if (nodes[pacmanCurrentIndex].classList.contains(classes[6])) {
      nodes[pacmanCurrentIndex].classList.remove(classes[6]);
      nodes[newIndex].classList.add(classes[6]);
    }
    pacmanCurrentIndex = newIndex;
    //check if any ghost is eaten
    ghosts.forEach((g) => {
      if (g.isScared && g.currentIndex === pacmanCurrentIndex) {
        clearInterval(g.timer);
        g.timer = null;
        g.isDead = true;
        nodes[g.currentIndex].classList.remove(g.className);
        nodes[g.currentIndex].classList.remove(classes[7]);
        nodes[g.currentIndex].classList.remove(classes[8]);
        deadGhost += 1;
        g.currentIndex = null;
        console.log(deadGhost, pacmanCurrentIndex);
        if (deadGhost === 4) {
          h3.innerHTML = ghostAllDead;
          endGame();
        }
      }
    });
    //check if any pac-dot is eaten and increase score
    if (nodes[pacmanCurrentIndex].classList.contains(classes[0])) {
      nodes[pacmanCurrentIndex].classList.remove(classes[0]);
      score++;
      h2.innerHTML = score;
      //check if the scrore is high enough to win, or all ghosts are dead
      if (score === 234) {
        h3.innerHTML = "WIN";
        endGame();
      }
    }
    //check if any power-pellet is eaten, and ghosts turn scared and could be eaten
    if (nodes[pacmanCurrentIndex].classList.contains(classes[3])) {
      nodes[pacmanCurrentIndex].classList.remove(classes[3]);
      ghosts.forEach((g) => {
        if (!g.isDead) {
          //if the previous power pellet is still effective,
          //remove the old effect and add new effect
          if (g.powerPelletTimer) {
            clearTimeout(g.powerPelletTimer);
          }
          g.isScared = true;
          nodes[g.currentIndex].classList.add(classes[7]);
          clearInterval(g.timer);
          g.timer = setInterval(() => {
            return ghostMove(g);
          }, 1000);
        }
        //after 10000ms, the effect of power-pellet is removed
        g.powerPelletTimer = setTimeout(() => {
          if (!g.isDead) {
            g.isScared = false;
            nodes[g.currentIndex].classList.remove(classes[7]);
            clearInterval(g.timer);
            g.timer = setInterval(() => {
              return ghostMove(g);
            }, g.speed);
          }
        }, 10000);
      });
    }
  }
  nodes[pacmanCurrentIndex].style = rotateStyle;
  // console.log(pacmanCurrentIndex);
}

//space key, color change
function changeColor(event) {
  if (event.code == arrowKeys[4]) {
    nodes[pacmanCurrentIndex].classList.add("black");
  }
}
function changeBackColor(event) {
  if (event.code == arrowKeys[4]) {
    nodes[pacmanCurrentIndex].classList.remove("black");
  }
}

//all my ghosts

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.isDead = false;
    this.timer = null;
    this.powerPelletTimer = null;
  }
}
let ghosts = [
  new Ghost("blinky", 348, 50),
  new Ghost("pinky", 376, 80),
  new Ghost("inky", 351, 60),
  new Ghost("clyde", 379, 100),
];

function ghostMove(g) {
  let directions = [1, -1, width, -width]; //right,left,down,up
  let oldIndex = g.currentIndex;
  let newIndex =
    directions[Math.floor(Math.random() * directions.length)] + oldIndex;
  if (
    //when there's no wall or ghost at the destination, the ghost move
    !nodes[newIndex].classList.contains(classes[1]) &&
    !nodes[newIndex].classList.contains(classes[8])
  ) {
    nodes[oldIndex].classList.remove(g.className);
    nodes[oldIndex].classList.remove(classes[8]);
    nodes[newIndex].classList.add(g.className);
    nodes[newIndex].classList.add(classes[8]);
    //if the ghost is scared, move the scared class as well
    if (g.isScared) {
      nodes[oldIndex].classList.remove(classes[7]);
      nodes[newIndex].classList.add(classes[7]);
    }
    g.currentIndex = newIndex;
  }
  //scared ghost commits suicide
  if (g.isScared && g.currentIndex === pacmanCurrentIndex) {
    clearInterval(g.timer);
    g.timer = null;
    g.isDead = true;
    nodes[g.currentIndex].classList.remove(g.className);
    nodes[g.currentIndex].classList.remove(classes[7]);
    nodes[g.currentIndex].classList.remove(classes[8]);
    deadGhost += 1;
    g.currentIndex = null;
    console.log(deadGhost, pacmanCurrentIndex);
    if (deadGhost === 4) {
      h3.innerHTML = ghostAllDead;
      endGame();
    }
  }

  //ghost eats pacman
  if (g.currentIndex === pacmanCurrentIndex && score != 274 && !g.isScared) {
    h3.innerHTML = "GAME OVER";
    endGame();
  }
}

function endGame() {
  //when game is end, remove ghosts' movements
  //and all event listener & handler
  ghosts.forEach((g) => {
    clearInterval(g.timer);
  });
  body.removeEventListener("keydown", movePacman);
  document.removeEventListener("keydown", changeColor);
  body.removeEventListener("keyup", changeBackColor);
}

//let ghosts enter the boarder
ghosts.forEach((g) => {
  nodes[g.startIndex].classList.add(classes[8]);
  nodes[g.startIndex].classList.add(g.className);
  g.timer = setInterval(() => {
    return ghostMove(g);
  }, g.speed);
});

//eventlisteners
body.addEventListener("keydown", movePacman);
document.addEventListener("keydown", changeColor);
body.addEventListener("keyup", changeBackColor);
