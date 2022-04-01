import G from '../Helpers/Globals.js';
import { Rect } from '../Helpers/Objects.js';


export default class Ball {
    constructor(props) {
        this._colision = props.colision || false;

        this._main = new Rect(G.Deffs().Rect.Ball);
        this._hitbox = {};

        console.log('%c[Components] Ball constructor loaded', 'color: yellow');
    }


    run() {
        this._main.render();

        if (this._colision) {
            this._updateHitbox();
            this._checkColisionProps();
        }
    }


    _updateHitbox() {
        this._hitbox.left   = this._main.pos[0];
        this._hitbox.bottom = this._main.pos[1] + this._main.size[1];
        this._hitbox.top    = this._main.pos[1];
        this._hitbox.right  = this._main.pos[0] + this._main.size[0];
    }


    _checkColisionProps() {
        if (this._colision.corners) {
            this._cornersColisionDetection();
        }
    }


    _cornersColisionDetection() {
        const cornerColision = {
            left:   this._hitbox.top <= 0,
            bottom: this._hitbox.right >= G.canvasW,
            top:    this._hitbox.left <= 0,
            right:  this._hitbox.bottom >= G.canvasH,
        };

        // TODO // Mudar o comportamento da colisão lateral

        if (cornerColision.left || cornerColision.right) {
            this._main.vectorMv[1] *= -1;

        } else if (cornerColision.top || cornerColision.bottom) {
            this._main.vectorMv[0] *= -1;
        }
    }
}
