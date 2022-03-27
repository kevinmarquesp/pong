import Globals from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Player {
    constructor() {
        this.main = new Rect({
            x: 10, y: 10,
            w: 30, h: 30,
            color: 'white',
        });
    }


    run() {
        this.main.render();
    }
}
