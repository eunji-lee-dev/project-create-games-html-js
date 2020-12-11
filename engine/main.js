const  container = document.querySelector(".img-container");
const  startBtn = document.querySelector(".start-btn");
const  gameText = document.querySelector(".game-start");
const  playTime = document.querySelector(".play-time");

const tileCount = 16;

let tiles = [];

const dragged = {
	el: null,
	class: null,
	index: null
}

SetGame();

function SetGame() {
	tiles = createImgTiles();
	tiles.forEach(tile => container.appendChild(tile));
	setTimeout(() => {
		container.innerHTML = "";
		mix(tiles).forEach(tile => container.appendChild(tile))
	},2000);
}

function createImgTiles() {
	const tempArray = [];
	Array(tileCount).fill().forEach((_, i) => {
		const li = document.createElement("li");
		li.setAttribute('data-index', i);
		li.setAttribute('draggable', 'true');
		li.classList.add(`list${i}`);
		tempArray.push(li);
	})
	return tempArray;
}

function mix(array) {
	let index = array.length - 1;
	while (index > 0) {
		const  randomIndex = Math.floor(Math.random() * (index + 1));
		[array[index], array[randomIndex]] = [array[randomIndex], array[index]]
		index--;
	}
	return array;
}

//events

container.addEventListener('dragstart',(e) => {
	dragged.el = e.target;
	dragged.class = e.target.className;
	dragged.index = [...e.target.parentNode.children].indexOf(e.target);
})

container.addEventListener('dragover',(e) => {
	e.preventDefault();
})

container.addEventListener('drop',(e) => {
	console.log(e);
})