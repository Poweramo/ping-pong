export default function drawCentralLine() {
	const canvasGame = document.getElementById("game-canvas");
	const context = canvasGame.getContext("2d");
	const canvasWidth = canvasGame.width;

        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(canvasWidth/ 2 , 0);
        context.lineTo(canvasWidth / 2, canvasWidth / 2);
        context.stroke();
}

