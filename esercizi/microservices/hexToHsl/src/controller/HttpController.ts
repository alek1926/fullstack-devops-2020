import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfHex, TtfHsl } from '../../../commons/src/model/Color';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHex;
            const convertedColor: TtfHsl = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;