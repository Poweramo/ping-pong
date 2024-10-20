// fix: decimal numbers problem
// fix: second player going beyond the canvas 
// TODO: add recording ball direction (left or right) and change the stepY value accordignly
// ! Seperate the code into different files (this file getting to big)

const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const context = canvasGame.getContext("2d");
const delay = ms => new Promise(res => setTimeout(res, ms));

class PingPong {
	constructor() {
		this.ballRadius = 5;
		this.ballCurrentY =  Math.floor(Math.random() * (canvasHeight + 1));
		this.ballDestinationY = Math.floor(Math.random() * (canvasHeight + 1));
		this.ballCurrentX = Math.floor(canvasWidth / 2);
		this.ballDestinationX = (this.ballDestinationY === 0 || this.ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (this.ballCurrentX + 1)) : 0;
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
	
	drawPlayer(x, y) {
		context.beginPath();
		context.strokeStyle = "white";
		context.lineWidth = 5;
		context.moveTo(x, y);
		context.lineTo(x, y + this.playerHeight);
		context.moveTo(x, y);
		context.lineTo(x, y - this.playerHeight);
		context.stroke();
	}
		
	generateBall() {
		context.beginPath();
		context.strokeStyle = "white";
		context.lineWidth = 2;
		context.arc(this.ballCurrentX, this.ballCurrentY, this.ballRadius, 0, 2 * Math.PI);
		context.stroke();
	}

	drawEverything() {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		this.drawCentralLine();
		this.drawScores();
		this.drawPlayer(this.firstPlayerX, this.firstPlayerY);
		this.drawPlayer(this.secondPlayerX, this.secondPlayerY);
		this.generateBall();
	}

	async moveBall() {
		while (this.ballCurrentX !== this.ballDestinationX || (Math.floor(this.ballCurrentY) !== this.ballDestinationY && Math.ceil(this.ballCurrentY) !== this.ballDestinationY)) {
			console.log(this.ballCurrentY);
			const stepY = (this.ballDestinationY - this.ballCurrentY) / (this.ballDestinationX - this.ballCurrentX);
			this.drawEverything();
			if (this.ballCurrentX !== this.ballDestinationX) this.ballCurrentX > this.ballDestinationX ? this.ballCurrentX-- : this.ballCurrentX++;
			if (Math.floor(this.ballCurrentY) !== this.ballDestinationY && Math.ceil(this.ballCurrentY) !== this.ballDestinationY) this.ballCurrentY -= stepY;

			if (this.didBallTouchPlayer(1)) break;
			if (Math.floor(this.ballCurrentY) === 0 || Math.ceil(this.ballCurrentY) === 0) break;
			if (Math.floor(this.ballCurrentY) === canvasHeight || Math.ceil(this.ballCurrentY) === canvasHeight) break;
			await delay(50);
		}
		if (this.didBallTouchPlayer(1) || Math.floor(this.ballCurrentY) === 0 || Math.ceil(this.ballCurrentY) === 0 || Math.floor(this.ballCurrentY) === canvasHeight || Math.ceil(this.ballCurrentY) === canvasHeight) {
			this.generateTrajectory();
		} else {
			this.changeScores();
			this.ballCurrentY =  Math.floor(Math.random() * (canvasHeight + 1));
                	this.ballDestinationY = Math.floor(Math.random() * (canvasHeight + 1));
                	this.ballCurrentX = Math.floor(canvasWidth / 2);
                	this.ballDestinationX = (this.ballDestinationY === 0 || this.ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (this.ballCurrentX + 1)) : 0;
			this.generateBall();
			this.moveBall();
		}
	}

	movePlayer(player, sign) {
		if (player === 1) {
			sign === "+" ? this.firstPlayerY++ : this.firstPlayerY--;
		} else {
			sign === "+" ? this.secondPlayerY++ : this.secondPlayerY--;
		}

		this.drawEverything();	
	}

	didBallTouchPlayer(player) {
		const distanceX = 5 + this.ballRadius;
		if (player === 1) {
			if (Math.round(this.ballCurrentX - this.firstPlayerX) === distanceX && Math.abs(Math.round(this.ballCurrentY - this.firstPlayerY)) <= this.playerHeight) return true;
		} else {
			if (Math.round(this.ballCurrentX - this.secondPlayerX) === -distanceX && Math.abs(Math.round(this.ballCurrentY - this.secondPlayerY)) > this.playerHeight) return true;
		}
	}

	changeScores() {
		if (Math.floor(this.ballCurrentX) === 0 || Math.ceil(this.ballCurrentX) === 0) this.scoreB++;
		if (Math.floor(this.ballCurrentX) === canvasWidth || Math.ceil(this.ballCurrentX) === canvasWidth) this.scoreA++;
		this.drawEverything();
	}

	generateTrajectory() {
		this.ballDestinationX = Math.round(Math.random() * (canvasWidth - this.ballCurrentX) + this.ballCurrentX)
		this.ballDestinationY = this.ballDestinationY === 0 ? canvasHeight : 0;
		this.moveBall();
	}
	
}

const game = new PingPong();

game.drawCentralLine();
game.drawScores();
game.drawPlayer(game.firstPlayerX, game.firstPlayerY);
game.drawPlayer(game.secondPlayerX, game.secondPlayerY);
game.generateBall();
game.moveBall();
window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowUp":
			if (game.firstPlayerY >= game.playerHeight) {
				game.ballCurrentX <= canvasWidth / 2 ? game.movePlayer(1, "-") : game.movePlayer(2, "-");
			}
			break;
		case "ArrowDown":
			if (game.firstPlayerY <= canvasHeight - game.playerHeight) {
				game.ballCurrentX <= canvasWidth / 2 ? game.movePlayer(1, "+") : game.movePlayer(2, "+");
			}
			break;
		default:
			break;
	}
})
