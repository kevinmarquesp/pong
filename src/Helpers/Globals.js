const $canvas = document.querySelector('#canvas');


const G = {
    canvasW: $canvas.width,
    canvasH: $canvas.height,

    ballSize: 20,
    playersPadding: 10,
    playersSize: { w: 10, h: 100 },


    Deffs() {
        const G = this;

        return {
            Rect: {
                Background: {
                    x: 0,
                    y: 0,
                    w: G.canvasW,
                    h: G.canvasH,
                    color: 'black',
                },

                Player: {
                    x: G.canvasW - G.playersSize.w - G.playersPadding,
                    y: G.canvasH / 2 - G.playersSize.h / 2,
                    w: G.playersSize.w,
                    h: G.playersSize.h,
                    color: 'white',
                },

                Opponent: {
                    x: G.playersPadding,
                    y: G.canvasH / 2 - G.playersSize.h / 2,
                    w: G.playersSize.w,
                    h: G.playersSize.h,
                    color: 'white',
                },

                Ball: {
                    x: G.canvasW / 2 - G.ballSize / 2,
                    y: G.canvasH / 2 - G.ballSize / 2,
                    w: G.ballSize,
                    h: G.ballSize,
                    color: 'white',
                    vectorMv: [ 5, -2 ],
                },
            },
        };
    },
};

export default G;
