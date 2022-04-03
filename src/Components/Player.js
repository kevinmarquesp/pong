import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Player {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Player);

        console.log('%c[Components] Player constructor loaded', 'color: yellow');
    }


    get main() { return this._main; }


    run() {
        this._main.render();
        this._keyBoardEvent();
    }


    _keyBoardEvent() {
        window.onkeydown = e => {
            if (e.key === G.playerUpKey) {
                this._main.pos[1] -= 10;

            } else if (e.key === G.playerDownKey) {
                this._main.pos[1] += 10;
            }
        };
    }
}
