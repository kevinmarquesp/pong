const $canvas = document.querySelector('#canvas');
const ctx = $canvas.getContext('2d');


export class Rect {
    constructor(props) {
        this.pos =      [ props.x, props.y ];
        this.size =     [ props.w, props.h ];
        this.color =    props.color;
        this.vectorMv = props.vectorMv || [ 0, 0 ];
    }


    render() {
        this._updatePos();

        ctx.fillStyle = this.color;
        ctx.fillRect( ...this.pos, ...this.size );
    }


    _updatePos() {
        this.pos[0] += this.vectorMv[0];
        this.pos[1] += this.vectorMv[1];
    }
}
