let ctx,
	width,
	height;

let lastClick = {
	x: undefined,
	y: undefined
}

function startGame() {
	createCanvas();
	loadImgs();
	drawBackground();
}

function loadImgs(){

}

function createCanvas() {
	let c = document.createElement("canvas");
	ctx = c.getContext("2d");

	let elemLeft = c.offsetLeft,
		elemTop = c.offsetTop;

	c.addEventListener('click',(e) => {
		let elemLeft = c.offsetLeft,
			elemTop = c.offsetTop;

		let xClick = e.pageX - elemtLeft,
			yClick = e.pageY - elemTop;
		console.log(xClick, yClick);

		lastClick.x = xClick;
		lastClick.y = yClick;
		console.log(xClick, yClick);
	});


	c.setAttribute("width", 800);
	c.setAttribute("height",500);

	document.getElementById("game").appendChild(c);

	return "ok";
}

function drawBackground() {
	let image = new Image();
	image.src = "https://images.photowall.com/products/48086/jungle-lake-with-wild-animals-1.jpg?h=699&q=85";

	image.onload = () => {
		ctx.drawImage(image,0,0,800,500);
	};
}

