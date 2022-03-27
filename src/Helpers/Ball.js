import Globals from './Helpers/Globals.js';

export default class Ball {
    constructor(props) {
        this.colision = props.colision.list;
        this.colisionBorders = props.colision.borders;
    }
}
