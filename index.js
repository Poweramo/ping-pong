// TODO: add moveBall method to the class and use the class methods to make the game work 

const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const context = canvasGame.getContext("2d");

class PingPong {
	constructor() {
		this.startY =  Math.floor(Math.random() * (canvasHeight + 1));
		this.finishY = Math.floor(Math.random() * (canvasHeight + 1));
		this.startX = Math.floor(canvasWidth / 2);
		this.finishX = (this.finishY === 0 || this.finishY === canvasHeight) ? Math.floor(Math.random() * (this.startX + 1)) : 0;
		this.playerHeight = 15;
		this.firstPlayerX = 10;
		this.firstPlayerY = canvasHeight / 2;
		this.secondPlayerX = canvasWidth - this.firstPlayerX;
		this.secondPlayerY = canvasHeight / 2;
		this.scoreA = 0;
		this.scoreB = 0;
	}

	drawCentralLine() {
		context.beginPath();
		context.strokeStyle = "white";
		context.lineWidth = 5;
		context.moveTo(canvasWidth / 2 , 0);
		context.lineTo(canvasWidth / 2, canvasWidth / 2);
		context.stroke();
	}

	
	drawScores() {
		context.font = "15px Arial";
		context.fillStyle = "white";
		context.fillText(this.scoreA, canvasWidth / 2 - 20, 20);
		context.fillText(this.scoreB, canvasWidth / 2 + 10, 20);
	}
	
	drawPlayer() {
		context.beginPath();
		context.strokeStyle = "white";
		context.lineWidth = 5;
		context.moveTo(x, y);
		context.lineTo(x, y + this.playerHeight);
		context.moveTo(x, y);
		context.lineTo(x, y - this.playerHeight);
		context.stroke();
	}
		
	generateBall(x, y) {
		const radius = 5;

		context.beginPath();
		context.strokeStyle = "green";
		context.lineWidth = 2;
		context.arc(x, y, radius, 0, 2 * Math.PI);
		context.stroke();
	}

}

const game = new PingPong();

async function moveBall() {
	let circleX = Math.floor(canvasGame.width / 2);
	let circleY = Math.floor(Math.random() * (canvasGame.height + 1));
	const mvtLineStartX = circleX;
	const mvtLineStartY = circleY;
	const mvtLineFinishY = Math.floor(Math.random() * (canvasGame.height + 1)); 
	const delay = ms => new Promise(res => setTimeout(res, ms));
	let y = canvasHeight / 2;


	window.addEventListener("keydown", (e) => {
		switch (e.key) {
			case "ArrowUp":
				if (y >= 15) drawEverything(circleX, circleY, mvtLineStartX, mvtLineStartY, mvtLineFinishX, mvtLineFinishY, y--);
				break;
			case "ArrowDown":
				if (y <= canvasGame.height - 15) drawEverything(circleX, circleY, mvtLineStartX, mvtLineStartY, mvtLineFinishX, mvtLineFinishY, y++);
				break;
			default:
				break;

		}
	})

	while (circleX !== mvtLineFinishX || circleY !== mvtLineFinishY) {
		const stepY = (mvtLineFinishY - mvtLineStartY) / (mvtLineFinishX - mvtLineStartX);

		context.clearRect(0, 0, canvasWidth, canvasHeight);
		drawEverything(circleX, circleY, mvtLineStartX, mvtLineStartY, mvtLineFinishX, mvtLineFinishY, y);
		if (circleX !== mvtLineFinishX) circleX > mvtLineFinishX ? circleX-- : circleX++;
		if (Math.floor(circleY) !== mvtLineFinishY && Math.ceil(circleY) !== mvtLineFinishY) circleY -= stepY;
		await delay(50)
	}
}
