//Basics

function rectangle() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        ctx.fillStyle='purple';
        ctx.fillRect(10,10,80,80); //X(of top left corner),Y(of top left corner),Width,Height

        ctx.clearRect(30,30,40,40);

        ctx.strokeStyle = 'green';
        ctx.strokeRect(40,40,20,20);
        
    }
}

function triangle() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        //Stroked Triangle
        ctx.beginPath();
        ctx.moveTo(0,75);
        ctx.lineTo(150,0);
        ctx.lineTo(150,75);
        ctx.closePath();
        ctx.stroke();

        //Filled Triangle
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.moveTo(300,75);
        ctx.lineTo(150,150);
        ctx.lineTo(150,75);
        ctx.fill();
    }
}

function arcs(){
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
       let ctx = canvas.getContext("2d");

       ctx.arc(150,75,50,Math.PI/3,Math.PI*4/3,true);  // X(of center) ,Y(of center), radius, start-angle, end-angle, (counter-clockwise?)
       ctx.stroke();

       /* ctx.arcTo(150,105,150,45,30); // x1, y1, x2, y2, radius
       ctx.stroke(); */
    }
}

function quadracticCurve(){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
      
    // Quadratic curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5); // cpx1, cpy1, x, y //From pen point to x,y using control point cpx1,cpy1
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
    }  
}

function bezierCurve() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      // Cubic curves example
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25); // cpx1, cpy1, cpx2, cpy2, x, y
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
}

function saveRestore() {
    const ctx = document.getElementById("canvas").getContext("2d");
  
    ctx.fillRect(0, 0, 150, 150); // Draw a Black rectangle with default settings
    ctx.save(); // Save the original default state
  
    ctx.fillStyle = "#09F"; // Make changes to saved settings
    ctx.fillRect(15, 15, 120, 120); // Draw a Blue rectangle with new settings
    ctx.save(); // Save the current state
  
    ctx.fillStyle = "#FFF"; // Make changes to saved settings
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90); // Draw a 50%-White rectangle with newest settings
  
    ctx.restore(); // Restore to previous state
    ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored Blue setting
  
    ctx.restore(); // Restore to original state
    ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored Black setting
}

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      const rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);
  
      const circle = new Path2D();
      circle.arc(100, 35, 25, 0, 2 * Math.PI);
  
      ctx.stroke(rectangle);
      ctx.fill(circle);
    }
}


//Basic Animations

function earth(){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      //Background
      ctx.fillStyle = 'black';
      ctx.fillRect(0,0,300,300);
      ctx.save();

      //Time Settings
      const time = new Date();

      //Earth
      ctx.translate(150,150);
      ctx.rotate(Math.PI*time.getSeconds()/30 + Math.PI*time.getMilliseconds()/30000);
      ctx.translate(-125,0);
      ctx.beginPath();
      ctx.fillStyle = 'lightblue';
      ctx.arc(0,0,15,0,Math.PI*2);
      ctx.fill();

      //Moon
      ctx.save();
      ctx.rotate(Math.PI*time.getSeconds()*12/30 + Math.PI*time.getMilliseconds()*12/30000);
      ctx.translate(-25,-150);  
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(60,150,8,0,Math.PI*2);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      //Sun
      ctx.beginPath();
      ctx.fillStyle = 'yellow';
      ctx.arc(150,150,50,0,Math.PI*2);
      ctx.fill();

      //Arc
      ctx.beginPath();
      ctx.strokeStyle = 'rgb(0 50 150)';
      ctx.arc(150,150,125,0,Math.PI*2);
      ctx.stroke();

      window.requestAnimationFrame(earth); 
    }
}  

function clock(){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,300,300);

        //blue circle
        ctx.save();
        let radGrad = ctx.createRadialGradient(150,150,100,150,150,120);
        radGrad.addColorStop(0.0,'midnightblue');
        radGrad.addColorStop(0.5,'blue');
        radGrad.addColorStop(1.0,'midnightblue');

        ctx.beginPath();
        ctx.arc(150,150,120,0,Math.PI*2,false);
        ctx.arc(150,150,100,0,Math.PI*2,true);
        ctx.fillStyle = radGrad;
        ctx.fill();
        ctx.restore();

        //Dash on the clock
        for(let i=0;i<12;i++){
            ctx.save();
            ctx.font = '36px serif';
            ctx.translate(150,150);
            ctx.rotate(Math.PI*i/6);
            ctx.translate(-7,-100);
            ctx.rotate(Math.PI/2);
            ctx.fillText('-',0,0);
            for(let j=1;j<5;j++){
                ctx.restore();
                ctx.save();
                ctx.translate(150,150);
                ctx.rotate(Math.PI*i/6 + Math.PI*j/30);
                ctx.translate(-2,-100);
                ctx.rotate(Math.PI/2);
                ctx.fillText('-',0,0);
                ctx.restore();
            }
        }

        //Numbers on clock
        let numbers = [12,1,2,3,4,5,6,7,8,9,10,11]
        for(let i=0;i<12;i++){
            ctx.save();
            ctx.font = '28px serif';
            ctx.translate(143,158);
            ctx.rotate(Math.PI*i/6);
            ctx.translate(0,-75);
            ctx.rotate(-Math.PI*i/6);
            ctx.fillText(`${numbers[i]}`,0,0, 20);
            ctx.restore();
        }

        //Hands on clock
        //Time settings
        const time = new Date();
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let hour = time.getHours();

        //Hour Hand
        ctx.save();
        
        ctx.translate(150,150);
        ctx.rotate(Math.PI*hour/6 + Math.PI*min/360 + Math.PI*sec/(1800*12));
        ctx.translate(-150,-150);
        
        ctx.lineCap = 'round';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(150,165);
        ctx.lineTo(150,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150,150,5,0,Math.PI*2)
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.lineTo(150,100);
        ctx.stroke();
        ctx.restore();

        //Minute Hand
        ctx.save();
        
        ctx.translate(150,150);
        ctx.rotate(Math.PI*min/30 + Math.PI*sec/1800);
        ctx.translate(-150,-150);
        
        ctx.lineCap = 'round';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(150,165);
        ctx.lineTo(150,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150,150,5,0,Math.PI*2)
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.lineTo(150,85);
        ctx.stroke();
        ctx.restore();
        
        //Second Hand
        ctx.save();

        ctx.translate(150,150);
        ctx.rotate(Math.PI*sec/30);
        ctx.translate(-150,-150);

        ctx.fillStyle ='red';
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(150,165);
        ctx.lineTo(150,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150,150,6,0,Math.PI*2)
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.lineTo(150,70);
        ctx.stroke();
        ctx.restore();

        window.requestAnimationFrame(clock);
    }
}

//Advanced animations

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
    x:100,
    y:100,
    vx:10,
    vy:3,
    radius:25,
    color:'green',
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function clear(){
    ctx.fillStyle = 'rgb(255 255 255 / 30%)'; //Trailing effect
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function moveBall(){
    clear();

    ball.draw();
    if(ball.x + ball.vx > canvas.width - ball.radius || ball.x + ball.vx < ball.radius){ //X-borders
        ball.vx *= -0.75;
    }
    if(ball.y + ball.vy > canvas.height - ball.radius || ball.y + ball.vy < ball.radius){ //Y-borders
        ball.vy *= -0.75;
    }
    ball.x += ball.vx; //Changing x
    ball.y += ball.vy; //Changing y
    ball.vy *= 0.99 
    ball.vy += 0.25 
    raf = window.requestAnimationFrame(moveBall);
}

let running =false;

canvas.addEventListener('mousemove',(e)=>{
    if(!running){
        clear();
        ball.x = e.clientX;
        ball.y = e.clientY;
        ball.draw();
    }
});

canvas.addEventListener('click',(e)=>{
    if(!running){
        raf = window.requestAnimationFrame(moveBall);
        running = true;
    }
});

canvas.addEventListener('mouseout',(e)=>{
    window.cancelAnimationFrame(raf); //Imp
    running = false;
});