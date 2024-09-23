let cellSize = 50;  // Size of each cell in the maze
let maze = [
  [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
];

// Array to hold the images for the icons
let icons = {};

function preload() {
  // Load the SVG files for the icons
  icons['heart'] = loadImage('imageshinge/Asset 46finicon.svg');
  icons['letter'] = loadImage('imageshinge/Asset 48finicon.svg');
  icons['lock'] = loadImage('imageshinge/Asset 56finicon.svg');
  icons['gift'] = loadImage('imageshinge/Asset 66finicon.svg');
  // Add more icons as needed from your folder...
}

function setup() {
  createCanvas(maze[0].length * cellSize, maze.length * cellSize);
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(4);
  
  // Draw the maze grid
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      let xPos = x * cellSize;
      let yPos = y * cellSize;
      
      if (maze[y][x] === 1) {
        // Draw a wall (black square)
        fill(0);
        rect(xPos, yPos, cellSize, cellSize);
      } else {
        // Empty space
        fill(255);
        rect(xPos, yPos, cellSize, cellSize);
        
        // Randomly place an icon in empty spaces
        let randomIcon = Math.floor(Math.random() * 4); // Pick an icon randomly
        
        switch(randomIcon) {
          case 0:
            image(icons['heart'], xPos, yPos, cellSize, cellSize);  // Heart icon
            break;
          case 1:
            image(icons['letter'], xPos, yPos, cellSize, cellSize);  // Letter icon
            break;
          case 2:
            image(icons['lock'], xPos, yPos, cellSize, cellSize);  // Lock icon
            break;
          case 3:
            image(icons['gift'], xPos, yPos, cellSize, cellSize);  // Gift icon
            break;
          // Add more cases for additional icons
        }
      }
    }
  }
}
