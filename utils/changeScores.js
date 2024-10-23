import drawEverything from "./drawEverything.js";

export default function changeScores() {
        if (Math.floor(ballCurrentX) === 0 || Math.ceil(ballCurrentX) === 0) scoreB++;
        if (Math.floor(ballCurrentX) === canvasWidth || Math.ceil(ballCurrentX) === canvasWidth) scoreA++;
        drawEverything();
}
