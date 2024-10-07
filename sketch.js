
const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 20; 
const mazeColor = 'blue';
let score = 0;
let timeLeft = 60; // 1 minute timer
let gameWon = false;
let timerInterval;
const mazeData = [
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

let icons = [];
let player;
document.getElementById('player-score').innerText = `Score: ${score}`;

// Example: When a player scores
function updateScore(points) {
    score += points;
    document.getElementById('player-score').innerText = `Score: ${score}`;
}


function preload() {
  // Load the SVG files for the icons
  for (let i = 0; i < 31; i++) {
    let letter = String.fromCharCode(97 + i);  // 'a' to 'z', 'za' to 'zf'
    icons[letter] = loadImage(`imageshinge/Asset ${35 + i}finicon.svg`);
  }
}

function setup() {
  createCanvas(maze[0].length * cellSize, maze.length * cellSize);
  player = new Player(1, 1);  // Start at the top-left corner

  generateIcons();
  noLoop();
}

function draw() {
  background(255);
  drawMaze();
  player.move();
  player.display();

  checkCollision();
  checkWin();
}

// Generate icons randomly for the empty spaces
let iconPositions = [];

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

// Draw the maze grid
function drawMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = mazeColor;
  ctx.lineWidth = 5;
  
  for (let row = 0; row < mazeData.length; row++) {
    for (let col = 0; col < mazeData[row].length; col++) {
      if (mazeData[row][col] === 1) {
        ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}


  // Draw icons
  for (let i = 0; i < iconPositions.length; i++) {
    let icon = iconPositions[i];
    let xPos = icon.x * cellSize;
    let yPos = icon.y * cellSize;
    image(icons[icon.icon], xPos, yPos, cellSize, cellSize);
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
    fill(255, 255, 0);  // Pac-Man color
    ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, this.size * 0.8);
  }
}

// Function to check if player collides with an icon
function checkCollision() {
  for (let i = 0; i < iconPositions.length; i++) {
    let icon = iconPositions[i];
    if (player.x === icon.x && player.y === icon.y) {
      iconPositions.splice(i, 1);  // Remove the icon
      updateScore (10);  // Increase score
      break;
    }
  }
}


function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  if (score >= 150) {
    document.getElementById('winningScreen').style.display = 'block';
    document.getElementById('finalScore').innerText = score;
  }
  clearInterval(timerInterval);
}

// Call necessary functions
preloadIcons();
drawMaze();
generateIcons();
drawIcons();
startTimer(); // Start the countdown timer

// Function to check if the player reached the end
function checkWin() {
  if (player.x === maze[0].length - 1 && player.y === maze.length - 1) {
    // Reset player position and regenerate icons
    player.x = 1;
    player.y = 1;
    generateIcons();  // Regenerate the icons
  }
}

function keyPressed() {
  loop();  // Allow movement when key is pressed
}
