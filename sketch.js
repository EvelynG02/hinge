let canvas;
let cellSize = 20;
let mazeColor = 'blue';
let score = 0;
let timeLeft = 60;
let player;
let icons = {};
let iconPositions = [];
const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,1], 
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1,1, 1, 0, 0, 0, 0,0, 0, 0, 1, 1, 1,1, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0,0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0,0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,1 ,0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1,1, 1, 0, 0, 0, 0,0, 0, 0, 1, 1, 1,1, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0,0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0,0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,1 ,0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1,1, 1, 0, 0, 0, 0,0, 0, 0, 1, 1, 1,1, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0,0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,0, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0,0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,1 ,0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0,0, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  
];
let colors = ['#7D869C', '#9593D9', '#7D5C65', '#D4CBE5', '#BEA8AA', '#313628', '#E2E4F6'];
function preload() {
  // Load icons (example)
  for (let i = 0; i < 31; i++) {
    let letter = String.fromCharCode(97 + i);  // 'a' to 'z', etc.
    icons[letter] = loadImage(`imageshinge/Asset ${35 + i}finicon.svg`);  // Correct path
  }
}

function setup() {
  createCanvas(maze[0].length * cellSize, maze.length * cellSize);
  player = new Player(1, 1);  // Starting position
  generateIcons();
  startTimer();
}

function draw() {
  background(255);
  drawMaze();
  player.move();
  player.display();
  drawIcons();
  checkCollision();
  checkWin();
}

function drawMaze() {
  stroke(mazeColor);
  strokeWeight(5);
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 1) {
        fill(mazeColor);
        rect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}

function generateIcons() {
  iconPositions = [];  // Clear previous icons
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 0 && Math.random() < 0.4) {  // Place icon in 40% of empty spaces
        let randomIcon = Math.floor(Math.random() * 31);
        let letter = String.fromCharCode(97 + randomIcon);
        iconPositions.push({x: x, y: y, icon: letter});
      }
    }
  }
}

function drawIcons() {
  for (let i = 0; i < iconPositions.length; i++) {
    let icon = iconPositions[i];
    image(icons[icon.icon], icon.x * cellSize, icon.y * cellSize, cellSize, cellSize);
  }
}


class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = cellSize;
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.canMove(this.x - 1, this.y)) this.x--;
    if (keyIsDown(RIGHT_ARROW) && this.canMove(this.x + 1, this.y)) this.x++;
    if (keyIsDown(UP_ARROW) && this.canMove(this.x, this.y - 1)) this.y--;
    if (keyIsDown(DOWN_ARROW) && this.canMove(this.x, this.y + 1)) this.y++;
  }

  canMove(x, y) {
    return x >= 0 && y >= 0 && x < maze[0].length && y < maze.length && maze[y][x] === 0;
  }

  display() {
    fill(255, 255, 0);  // Player color
    ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, this.size * 0.8);
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `Time: ${timeLeft}`; // Ensure 'timer' exists in HTML
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);}

function checkCollision() {
  for (let i = 0; i < iconPositions.length; i++) {
    let icon = iconPositions[i];
    if (player.x === icon.x && player.y === icon.y) {
      iconPositions.splice(i, 1);  // Remove the icon
      updateScore(10);  // Increase score
      drawMaze(); // Re-draw the maze and icons after collision
      break;
    }
  }}

function checkWin() {
  // Check if player reaches end of maze
}
function endGame() {
  if (score >= 1000) {
    document.getElementById('winningScreen').style.display = 'block';
    document.getElementById('finalScore').innerText = `Your Score: ${score}`;
  }
  clearInterval(timerInterval);
}
function updateScore(points) {
  score += points;
  document.getElementById('player-score').innerText = `Score: ${score}`;
  if (score >= 150) {
    endGame(); // Trigger game win when score reaches 150
}
}

function gameLoop() {
  drawMaze();
  drawIcons();
  player.move();
  player.display();
  checkCollision();
  checkWin();
}
setInterval(gameLoop, 100); // Update the game every 100ms