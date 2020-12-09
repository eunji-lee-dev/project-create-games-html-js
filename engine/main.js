let ctx,
	width,
	height;

let image,
	currentSx = 0;

// let leftValueWithoutPx = parseInt(leftValue);


let lastClick = {
	x: undefined,
	y: undefined
}

let spriteSrc;

let frames = 0;

function startGame() {
	createCanvas();
	loadImgs();

	image = new  Image();
	image.src = spriteSrc;

	image.onload = () => {
		window.requestAnimationFrame(gameLoop);
	}
	move();
	// drawBackground();
}

function loadImgs(){

}

function createCanvas() {
	let c = document.createElement("canvas");
	ctx = c.getContext("2d");

	// let elemLeft = c.offsetLeft,
	// 	elemTop = c.offsetTop;

	c.addEventListener('click',(e) => {
		let elemLeft = c.offsetLeft,
			elemTop = c.offsetTop;

		let xClick = e.pageX - elemLeft,
			yClick = e.pageY - elemTop;
		console.log(xClick, yClick);

		lastClick.x = xClick;
		lastClick.y = yClick;
		// console.log(xClick, yClick);
	});


	c.setAttribute("width", 800);
	c.setAttribute("height",500);

	document.getElementById("game").appendChild(c);

	return "ok";
}

function drawBackground(imageSrc) {
	let image = new Image();
	image.src = imageSrc;

	image.onload = () => {
		ctx.drawImage(image,0,0,800,500);
	};
}

function renderSprite(imageSrc, position, sx) {
	ctx.drawImage(image,sx,0,96,64,position.x,position.y,96,64);
}

function renderBackgroundColor(color) {
	ctx.fillStyle = color;
	ctx.fillRect(0,0,800,500);
}

function gameLoop() {
	ctx.clearRect(0,0,800,500);

	renderSprite(spriteSrc, {x:50, y:50}, currentSx);

	if ((frames % 6) === 0) {
		currentSx += 96;
		if (currentSx === 672) currentSx = 0;
	}

	frames++;

	window.requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', move);

function move(e){
	if((e.key === 'a') && image.offsetLeft > 0){
		image.style.left = (image.offsetLeft - 5)+'px';
		image.style.backgroundPosition = '70px';
	} else if((e.key === 'd') && image.offsetLeft < 770){
		image.style.left = (image.offsetLeft + 5)+'px';
		image.style.backgroundPosition = '35px';
	}


}