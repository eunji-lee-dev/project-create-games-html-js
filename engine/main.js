const  container = document.querySelector(".img-container");
const  startBtn = document.querySelector(".start-btn")
const  gameText = document.querySelector(".game-start");
const  playTime = document.querySelector(".play-time");

const tileCount = 16;

Array(tileCount).fill().forEach((_, i)=> {
	const li = document.createElement("li");
	li.setAttribute('data-index', i);
	li.classList.add(`list${i}`);
	console.log(li);
	container.appendChild(li);
});