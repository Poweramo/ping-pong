export default function drawScores(scoreA, scoreB) {
	const canvasGame = document.getElementById("game-canvas");
	const context = canvasGame.getContext("2d");
	const canvasWidth = canvasGame.width;
	const textSize = 20;

        context.font = "15px Arial";
        context.fillStyle = "white";
        context.fillText(scoreA, canvasWidth / 2 - textSize, textSize);
        context.fillText(scoreB, canvasWidth / 2 + textSize / 2, textSize);
}
