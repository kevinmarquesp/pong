import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Ball {
    constructor(props) {
        this.colision = props.colision;

        this._main = new Rect(G.Deffs().Rect.Ball);
    }


    run() {
        this._main.render();
    }
}
