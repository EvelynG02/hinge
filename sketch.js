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
  icons['a'] = loadImage('imageshinge/Asset 35finicon.svg');
  icons['b'] = loadImage('imageshinge/Asset 36finicon.svg');
  icons['c'] = loadImage('imageshinge/Asset 37finicon.svg');
  icons['d'] = loadImage('imageshinge/Asset 38finicon.svg');
  icons['e'] = loadImage('imageshinge/Asset 39finicon.svg');
  icons['f'] = loadImage('imageshinge/Asset 40finicon.svg');
  icons['g'] = loadImage('imageshinge/Asset 41finicon.svg');
  icons['h'] = loadImage('imageshinge/Asset 42finicon.svg');
  icons['i'] = loadImage('imageshinge/Asset 43finicon.svg');
  icons['j'] = loadImage('imageshinge/Asset 44finicon.svg');
  icons['k'] = loadImage('imageshinge/Asset 45finicon.svg');
  icons['l'] = loadImage('imageshinge/Asset 46finicon.svg');
  icons['m'] = loadImage('imageshinge/Asset 47finicon.svg');
  icons['n'] = loadImage('imageshinge/Asset 48finicon.svg');
  icons['o'] = loadImage('imageshinge/Asset 49finicon.svg');
  icons['p'] = loadImage('imageshinge/Asset 50finicon.svg');
  icons['q'] = loadImage('imageshinge/Asset 51finicon.svg');
  icons['r'] = loadImage('imageshinge/Asset 52finicon.svg');
  icons['s'] = loadImage('imageshinge/Asset 53finicon.svg');
  icons['t'] = loadImage('imageshinge/Asset 54finicon.svg');
  icons['u'] = loadImage('imageshinge/Asset 55finicon.svg');
  icons['v'] = loadImage('imageshinge/Asset 56finicon.svg');
  icons['w'] = loadImage('imageshinge/Asset 57finicon.svg');
  icons['x'] = loadImage('imageshinge/Asset 58finicon.svg');
  icons['y'] = loadImage('imageshinge/Asset 59finicon.svg');
  icons['z'] = loadImage('imageshinge/Asset 60finicon.svg');
  icons['za'] = loadImage('imageshinge/Asset 61finicon.svg');
  icons['zb'] = loadImage('imageshinge/Asset 62finicon.svg');
  icons['zc'] = loadImage('imageshinge/Asset 63finicon.svg');
  icons['zd'] = loadImage('imageshinge/Asset 64finicon.svg');
  icons['ze'] = loadImage('imageshinge/Asset 65finicon.svg');
  icons['zf'] = loadImage('imageshinge/Asset 66finicon.svg');
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
        let randomIcon = Math.floor(Math.random() * 31); // Pick an icon randomly
        
        switch(randomIcon) {
          case 0:
            image(icons['a'], xPos, yPos, cellSize, cellSize);  // Heart icon
            break;
          case 1:
            image(icons['b'], xPos, yPos, cellSize, cellSize);  // Letter icon
            break;
          case 2:
            image(icons['c'], xPos, yPos, cellSize, cellSize);  // Lock icon
            break;
          case 3:
            image(icons['d'], xPos, yPos, cellSize, cellSize);  // Gift icon
            break;
          case 4:
            image(icons['e'], xPos, yPos, cellSize, cellSize);  // Heart icon
            break;
          case 5:
            image(icons['f'], xPos, yPos, cellSize, cellSize);  // Letter icon
            break;
          case 6:
            image(icons['g'], xPos, yPos, cellSize, cellSize);  // Lock icon
            break;
          case 7:
            image(icons['h'], xPos, yPos, cellSize, cellSize);  // Gift icon
            break;
            case 8:
              image(icons['i'], xPos, yPos, cellSize, cellSize);  // Heart icon
              break;
            case 9:
              image(icons['j'], xPos, yPos, cellSize, cellSize);  // Letter icon
              break;
            case 10:
              image(icons['k'], xPos, yPos, cellSize, cellSize);  // Lock icon
              break;
            case 11:
              image(icons['l'], xPos, yPos, cellSize, cellSize);  // Gift icon
              break;
            case 12:
              image(icons['m'], xPos, yPos, cellSize, cellSize);  // Heart icon
              break;
            case 13:
              image(icons['n'], xPos, yPos, cellSize, cellSize);  // Letter icon
              break;
            case 14:
              image(icons['o'], xPos, yPos, cellSize, cellSize);  // Lock icon
              break;
            case 15:
              image(icons['p'], xPos, yPos, cellSize, cellSize);  // Gift icon
              break;
              case 16:
            image(icons['q'], xPos, yPos, cellSize, cellSize);  // Heart icon
            break;
          case 17:
            image(icons['r'], xPos, yPos, cellSize, cellSize);  // Letter icon
            break;
          case 18:
            image(icons['s'], xPos, yPos, cellSize, cellSize);  // Lock icon
            break;
          case 19:
            image(icons['t'], xPos, yPos, cellSize, cellSize);  // Gift icon
            break;
          case 20:
            image(icons['u'], xPos, yPos, cellSize, cellSize);  // Heart icon
            break;
          case 221:
            image(icons['v'], xPos, yPos, cellSize, cellSize);  // Letter icon
            break;
          case 22:
            image(icons['w'], xPos, yPos, cellSize, cellSize);  // Lock icon
            break;
          case 23:
            image(icons['x'], xPos, yPos, cellSize, cellSize);  // Gift icon
            break;
            case 24:
              image(icons['y'], xPos, yPos, cellSize, cellSize);  // Heart icon
              break;
            case 25:
              image(icons['z'], xPos, yPos, cellSize, cellSize);  // Letter icon
              break;
            case 26:
              image(icons['za'], xPos, yPos, cellSize, cellSize);  // Lock icon
              break;
            case 27:
              image(icons['zb'], xPos, yPos, cellSize, cellSize);  // Gift icon
              break;
              
            case 28:
              image(icons['zc'], xPos, yPos, cellSize, cellSize);  // Heart icon
              break;
            case 29:
              image(icons['zd'], xPos, yPos, cellSize, cellSize);  // Letter icon
              break;
            case 20:
              image(icons['ze'], xPos, yPos, cellSize, cellSize);  // Lock icon
              break;
            case 31:
              image(icons['zf'], xPos, yPos, cellSize, cellSize);  // Gift icon
              break;
          // Add more cases for additional icons
        }
      }
    }
  }
}
