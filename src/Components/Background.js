import G from '../Helpers/Globals.js';
import { Rect, Path, Text } from '../Helpers/Objects.js';


export default class Background {
    constructor() {
        this._main = new Rect(G.Deffs().Rect.Background);
        this._path = new Path(G.Deffs().Path.Line);

        this._playerText = new Text(G.Deffs().Text.Player);
        this._opponentText = new Text(G.Deffs().Text.Opponent);
    }


    run() {
        this._main.render();
        this._path.render();

        this._playerText.render();
        this._opponentText.render();
    }
}
