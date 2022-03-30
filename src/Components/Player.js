import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Player {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Player);

        console.log('%c[Components] Player constructor loaded', 'color: yellow');
    }


    run() {
        this._main.render();
    }
}
