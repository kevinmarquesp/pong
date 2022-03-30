import G from '../Helpers/Globals.js';
import { Rect, Path } from '../Helpers/Objects.js';


export default class Background {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Background);
        this._path = new Path(G.Deffs().Path.Line);
    }


    run() {
        this._main.render();
        this._path.render();
    }
}
