import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Opponent {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Opponent);

        console.log('%c[Components] Opponent constructor loaded', 'color: yellow');
    }


    get main() { return this._main; }


    run(props) {
        this._mvOpponent(props.ballY);
        this._main.render();
    }


    _mvOpponent(ballY) {
        this._main.pos[1] = ballY - this._main.pos[1] / 2;
    }
}
