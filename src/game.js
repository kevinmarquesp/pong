import Background from './Components/Background.js';
import Player from './Components/Player.js';
import Opponent from './Components/Opponent.js';
import Ball from './Components/Ball.js';


class Game {
    constructor() {
        this.State = {
            paused: true
        };

        this.background = new Background();
        this.player = new Player();
        this.opponent = new Opponent();

        this.ball = new Ball({
            colision: {
                corners: true,
                colision: [
                    this.player,
                    this.opponent,
                ],
            },
        });
    }


    init() {
        this.background.run();

        this.player.run();
        this.opponent.run();
        this.ball.run();

        if (!this.State.paused) {
            requestAnimationFrame(this.init.bind(this));
        }
    }
}


const game = new Game();
game.init();
