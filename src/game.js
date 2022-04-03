import Background from './Components/Background.js';
import Player from './Components/Player.js';
import Opponent from './Components/Opponent.js';
import Ball from './Components/Ball.js';


class Game {
    constructor() {
        this._State = {
            // paused: false,
            paused: true,
            winner: '',
        };

        this._background = new Background();
        this._player = new Player();
        this._opponent = new Opponent();

        // 'Ball' precisa das informações de colisão (todos são 'Rects')

        this._ball = new Ball({
            colision: {
                corners: true,
                elements: [
                    this._player,
                    this._opponent,
                ],
            },
        });

        console.log('%c[Game] Game constructor loaded!', 'color: greenyellow');
    }


    init() {
        this._background.run();

        this._player.run();
        this._opponent.run();
        this._ball.run();

        this._checkWinner();
        this._resetGame();

        if (!this._State.paused) {
            requestAnimationFrame(this.init.bind(this));
        }
    }


    _checkWinner() {
        if (this._ball.loser.player) {
            this._State.winner = 'opponent';
            this._background.opponentText.text++;

        } else if (this._ball.loser.opponent) {
            this._State.winner = 'player';
            this._background.playerText.text++;
        }
    }


    /* ===== Reseta a posição da bolinha ===== */

    _resetGame() {
        if (this._ball.loser.opponent || this._ball.loser.player) {
            this._State.paused = true;
            setTimeout(this._unpauseAndResetGame.bind(this), 1000);
        }
    }


    _unpauseAndResetGame() {
        this._State.paused = false;

        if (this._State.winner === 'player') {
            this._ball.main.vectorMv[0] *= this._ball.main.vectorMv[0] < 0 ? -1 : 1;

        } else if (this._State.winner === 'opponent') {
            this._ball.main.vectorMv[0] *= this._ball.main.vectorMv[0] > 0 ? -1 : 1;
        }

        this._ball.resetBallPos();
        this.init();
    }
}


const game = new Game();
game.init();
