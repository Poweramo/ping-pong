// TODO: detect when the ball touches a player

const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const context = canvasGame.getContext("2d");
const delay = ms => new Promise(res => setTimeout(res, ms));

class PingPong {
	constructor() {
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
		const radius = 5;

		context.beginPath();
		context.strokeStyle = "green";
		context.lineWidth = 2;
		context.arc(this.ballCurrentX, this.ballCurrentY, radius, 0, 2 * Math.PI);
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
		while (this.ballCurrentX !== this.ballDestinationX || this.ballCurrentY !== this.ballDestinationY) {
			const stepY = (this.ballDestinationY - this.ballCurrentY) / (this.ballDestinationX - this.ballCurrentX);

			this.drawEverything();
			if (this.ballCurrentX !== this.ballDestinationX) this.ballCurrentX > this.ballDestinationX ? this.ballCurrentX-- : this.ballCurrentX++;
			if (Math.floor(this.ballCurrentY) !== this.ballDestinationY && Math.ceil(this.ballCurrentY) !== this.ballDestinationY) this.ballCurrentY -= stepY;
			await delay(50)
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
