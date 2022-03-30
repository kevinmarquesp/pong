import G from '../Helpers/Globals.js';
import { Rect, Path, Text } from '../Helpers/Objects.js';


export default class Background {
    constructor() {
        this._background = new Rect(G.Deffs().Rect.Background);
        this._path = new Path(G.Deffs().Path.Line);

        this.playerText = new Text(G.Deffs().Text.Player);
        this.opponentText = new Text(G.Deffs().Text.Opponent);

        console.log('%c[Components] Background constructor loaded', 'color: yellow');
    }


    run() {
        this._background.render();
        this._path.render();

        this.playerText.render();
        this.opponentText.render();
    }
}
