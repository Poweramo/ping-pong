export default function drawPlayer(x, y) {
	const gameCanvas = document.getElementById("game-canvas");
	const context = gameCanvas.getContext("2d");
	const playerHeight = 15;
	const playerWidth = 5;

        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = playerWidth;
        context.moveTo(x, y);
        context.lineTo(x, y + playerHeight);
        context.moveTo(x, y);
        context.lineTo(x, y - playerHeight);
        context.stroke();
}

