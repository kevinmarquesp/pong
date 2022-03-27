import Globals from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Background {
    constructor() {
        this._main = new Rect(Globals.Deffs().Rect.Background);
    }


    run() {
        this._main.render();
    }
}
