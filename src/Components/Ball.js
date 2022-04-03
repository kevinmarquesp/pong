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

        if (this._colision.elements.length !== 0) {
            this._elementsColisionDetection();
        }
    }


    /* ===== COLISÃO COM AS BORDARS ===== */

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


    /* ===== COLISÃO COM OS ELEMENTOS ===== */

    _elementsColisionDetection() {
        this._colision.elements.forEach(e => {
            const eHitbox = this._makeElementHitbox(e);

            if (this._elementCollision(eHitbox)) {
                if (this._elementYCollisionDirection(eHitbox)) {
                    this._main.vectorMv[1] *= -1;   // Se houve colisão no eixo Y

                } else {
                    this._main.vectorMv[0] *= -1;   // Se não... foi no eixo X
                }
            }
        });
    }


    _makeElementHitbox(e) {
        return {
            left:   e.main.pos[0],
            bottom: e.main.pos[1] + e.main.size[1],
            top:    e.main.pos[1],
            right:  e.main.pos[0] + e.main.size[0],
        };
    }


    // Checa se a bolinha está colidindo com o elemento

    _elementCollision(eHitbox) {
        return (
            eHitbox.left < this._hitbox.right
            && eHitbox.right > this._hitbox.left
            && eHitbox.top < this._hitbox.bottom
            && eHitbox.bottom > this._hitbox.top
        );
    }


    // Checa a direção da colisão, se foi feita no eixo Y

    _elementYCollisionDirection(eHitbox) {
        const topCollisionDetection = (
            this._hitbox.bottom - eHitbox.top < this._hitbox.right - eHitbox.left
            && this._hitbox.bottom - eHitbox.top < eHitbox.right - this._hitbox.right
            || this._hitbox.bottom - eHitbox.top < this._hitbox.left - eHitbox.left
            && this._hitbox.bottom - eHitbox.top < eHitbox.right - this._hitbox.left
        );

        const bottomCollisionDetection = (
            eHitbox.bottom - this._hitbox.top < this._hitbox.right - eHitbox.left
            && eHitbox.bottom - this._hitbox.top < eHitbox.right - this._hitbox.right
            || eHitbox.bottom - this._hitbox.top < this._hitbox.left - eHitbox.left
            && eHitbox.bottom - this._hitbox.top < eHitbox.right - this._hitbox.left
        );

        return (bottomCollisionDetection || topCollisionDetection);
    }
}
