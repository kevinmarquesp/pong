import Player from './Components/Player.js';
import Opponent from './Components/Player.js';
import Ball from './Components/Ball.js';


class Game {
    constructor() {
        this.State = {
            paused: true
        };

        this.player = new Player();
        this.opponent = new Opponent();

        this.ball = new Ball({
            colision: {
                borders: true,
                colision: [
                    this.player,
                    this.opponent,
                ],
            },
        });
    }


    init() {
        this.player.run();

        if (!this.State.paused) {
            requestAnimationFrame(this.init.bind(this));
        }
    }
}


const game = new Game();
game.init();
