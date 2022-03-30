const $canvas = document.querySelector('#canvas');

const G = {
    canvasW: $canvas.width,
    canvasH: $canvas.height,

    // Atalhos para algumas constantes

    ballSize: 20,
    ballVectorMv: [ 5, -2 ],

    playersPadding: 10,
    playersSize: { w: 10, h: 100 },

    gameLineWidth: 5,
    gameFontSize: '20px',
    gameFontFamilly: 'monospace',
    gameTextPadding: 50,

    // Definições dos objetos do jogo

    Deffs() {
        const G = this;

        return {
            Path: {
                Line: {
                    begin: {
                        x: G.canvasW / 2 + G.gameLineWidth,
                        y: 0,
                    },

                    end: {
                        x: G.canvasW / 2 + G.gameLineWidth,
                        y: G.canvasH,
                    },

                    dotted: {
                        dotSize: 5,
                        spaceSize: 10,
                    },

                    w: G.gameLineWidth,
                    color: 'lightgray',
                },
            },

            Text: {
                Player: {
                    x: G.canvasW / 4,
                    y: G.gameTextPadding,
                    color: 'lightgray',
                    text: '0',
                    font: G.gameFontFamilly,
                    size: G.gameFontSize,
                    align: 'center',
                },

                Opponent: {
                    x: G.canvasW / 4 * 3,
                    y: G.gameTextPadding,
                    color: 'lightgray',
                    text: '0',
                    font: G.gameFontFamilly,
                    size: G.gameFontSize,
                    align: 'center',
                },
            },

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
                    vectorMv: G.ballVectorMv,
                },
            },
        };
    },
};


export default G;
