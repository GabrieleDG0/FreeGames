(function() {
    var SIZE = 500; 
    var GRID_SIZE = SIZE / 50;
    var field = document.getElementById('field');
    field.height = field.width = SIZE * 2; 
    field.style.width = field.style.height = SIZE + 'px';
    var ctx = field.getContext('2d');
    ctx.scale(2, 2); 
      
    var direction = newDirection = 1; 
    var snakeLength = 5;
    var snake = [{x: SIZE / 2, y: SIZE / 2}]; 
    var food = null;
    var end = false;
    var score = 0;

    function randomFood() {
      return Math.floor(Math.random() * SIZE / GRID_SIZE) * GRID_SIZE;
    }
  
    function coordToString(obj) {
      return [obj.x, obj.y].join(',');
    }
  
    function tick() {
      var snakePart = {x: snake[0].x, y: snake[0].y};
  
     
      if (Math.abs(direction) !== Math.abs(newDirection)) {
        direction = newDirection;
      }
      var axis = Math.abs(direction) === 1 ? 'x' : 'y'; 
      if (direction < 0) {
        snakePart[axis] -= GRID_SIZE; 
      } else {
        snakePart[axis] += GRID_SIZE; 
      }
  
     
      if (food && food.x === snakePart.x && food.y === snakePart.y) {
        food = null;
        snakeLength += 10;
        score++;
      }
  
      ctx.fillStyle = '#22424a';
      ctx.fillRect(0, 0, SIZE, SIZE); 
      if (end) {
        ctx.fillStyle = '#e8dbb0';
        ctx.font = '30px Monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over- Score: '+score, SIZE / 2, SIZE / 2);
        ctx.fillText('Space to continue', SIZE / 2, 300);
        if(newDirection == 5){
        location.reload(); 
        }
      } else {
        snake.unshift(snakePart); 
        snake = snake.slice(0, snakeLength);
        ctx.fillStyle = '#e8dbb0'; 
        ctx.font = '20px Monospace';
        ctx.fillText('Score:'+score, 5, 20);
      }
  
     
      if (snakePart.x < 0 || snakePart.x >= SIZE || snakePart.y < 0 || snakePart.y >= SIZE) {
        end = true;
      }
  
      ctx.fillStyle = '#15b31b';
      var snakeObj = {};
      for (var i = 0; i < snake.length; i++) {
        var a = snake[i];
        ctx.fillRect(a.x, a.y, GRID_SIZE-1, GRID_SIZE-1); 
      
        if (i > 0) snakeObj[coordToString(a)] = true;
      }
  
      if (snakeObj[coordToString(snakePart)]) end = true; 
 
      while (!food || snakeObj[coordToString(food)]) {
        food = {x: randomFood(), y: randomFood()};
      }
  
      ctx.fillStyle = '#f2d729';
      ctx.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE);
      ctx.drawEllipse(3, 10, 10, 100, 60);
    }
  
    window.onload = function() {
      setInterval(tick, 100); 
      window.onkeydown = function(e) {
        newDirection = {37: -1, 38: -2, 39: 1, 40: 2, 32: 5}[e.keyCode] || newDirection; 
      };
    };

  })();