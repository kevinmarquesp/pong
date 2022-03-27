import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Opponent {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Opponent);
    }


    run() {
        this._main.render();
    }
}
