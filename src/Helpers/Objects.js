const $canvas = document.querySelector('#canvas');
const ctx = $canvas.getContext('2d');


export class Rect {
    constructor(props) {
        this.pos =      [ props.x, props.y ];
        this.size =     [ props.w, props.h ];
        this.color =    props.color;
        this.vectorMv = props.vectorMv || [ 0, 0 ];

        console.log('[Objects] Rect is used');
    }


    render() {
        this._updatePos();

        ctx.fillStyle = this.color;
        ctx.fillRect(...this.pos, ...this.size);
    }


    // Faz o retâgulo mudar de posição no próximo 'render()'

    _updatePos() {
        this.pos[0] += this.vectorMv[0];
        this.pos[1] += this.vectorMv[1];
    }
}


export class Path {
    constructor(props) {
        this.begin =  [ props.begin.x, props.begin.y ];
        this.end =    [ props.end.x, props.end.y ];
        this.w =      props.w;
        this.color =  props.color;

        if (props.dotted) {
            this.dotted = [ props.dotted.dotSize, props.dotted.spaceSize ];
        }

        console.log('[Objects] Path is used');
    }


    render() {
        this._dottedStyle();

        ctx.beginPath();
        this._drawnPath();
        ctx.stroke();
    }


    // Faz a linha pontilhada em Chromium e Mozilla based browsers

    _dottedStyle() {
        if (this.dotted) {
            if (ctx.setLineDash) {
                ctx.setLineDash(this.dotted);

            } else if (ctx.mozDash) {
                ctx.mozDash(this.dotted);
            }
        }
    }


    // Configurações da linha de fato...

    _drawnPath() {
        ctx.lineWidth = this.w;
        ctx.strokeStyle = this.color;
        ctx.moveTo( ...this.begin );
        ctx.lineTo( ...this.end );
    }
}


export class Text {
    constructor(props) {
        this.text  = props.text;
        this.pos   = [ props.x, props.y ];

        // O tamanho e a fontes precisam estar na mesma string

        this.font  = `${props.size} ${props.font}`;
        this.color = props.color;
        this.align = props.align;

        console.log('[Objects] Text is used');
    }


    render() {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.fillText( this.text, ...this.pos );
    }
}
