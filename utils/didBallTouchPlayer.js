export default function didBallTouchPlayer(player) {
        const distanceX = 5 + ballRadius;
        if (player === 1) {
                if (Math.round(ballCurrentX - firstPlayerX) === distanceX && Math.abs(Math.round(ballCurrentY - firstPlayerY)) <= playerHeight) return true;
        } else {
                if (Math.round(ballCurrentX - secondPlayerX) === -distanceX && Math.abs(Math.round(ballCurrentY - secondPlayerY)) > playerHeight) return true;
        }
}
