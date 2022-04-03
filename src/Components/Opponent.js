import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Opponent {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Opponent);

        console.log('%c[Components] Opponent constructor loaded', 'color: yellow');
    }


    get main() { return this._main; }


    run() {
        this._main.render();
    }
}
