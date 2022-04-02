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
        if (this._colision) {
            this._updateHitbox();
            this._checkColisionProps();
        }

        this._main.render();
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


    /*
     *  Sessão responsável por fazer a bolinha colidir com os objetos
     */

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


    _elementsColisionDetection() {
        const ballHitbox = this._hitbox;
        const ball = this._main;

        this._colision.elements.forEach(e => {
            // Objeto que guarda o a hitbox do elemente e os métodos de colisão

            const elementHitbox = {
                left:   e.main.pos[0],
                bottom: e.main.pos[1] + e.main.size[1],
                top:    e.main.pos[1],
                right:  e.main.pos[0] + e.main.size[0],


                // Diz se a bolinha está colidindo com o elemento

                collide() {
                    return (
                        this.left < ballHitbox.right
                        && this.right > ballHitbox.left
                        &&
                        this.top < ballHitbox.bottom
                        && this.bottom > ballHitbox.top
                    );
                },


                // Diz se a colisão foi mais vertical do que horizontal

                yCheckout() {
                    const topCollisionDetection = (
                        ballHitbox.bottom - elementHitbox.top < ballHitbox.right - elementHitbox.left
                        && ballHitbox.bottom - elementHitbox.top < elementHitbox.right - ballHitbox.right
                        ||
                        ballHitbox.bottom - elementHitbox.top < ballHitbox.left - elementHitbox.left
                        && ballHitbox.bottom - elementHitbox.top < elementHitbox.right - ballHitbox.left
                    );

                    const bottomCollisionDetection = (
                        elementHitbox.bottom - ballHitbox.top < ballHitbox.right - elementHitbox.left
                        && elementHitbox.bottom - ballHitbox.top < elementHitbox.right - ballHitbox.right
                        ||
                        elementHitbox.bottom - ballHitbox.top < ballHitbox.left - elementHitbox.left
                        && elementHitbox.bottom - ballHitbox.top < elementHitbox.right - ballHitbox.left
                    );

                    return bottomCollisionDetection || topCollisionDetection;
                },
            };


            // Trecho que usa essas informações para redirecionar a bolinha

            if (elementHitbox.collide()) {
                if (elementHitbox.yCheckout()) {
                    ball.vectorMv[1] *= -1;

                } else {
                    ball.vectorMv[0] *= -1;
                }
            }
        });
    }
}
