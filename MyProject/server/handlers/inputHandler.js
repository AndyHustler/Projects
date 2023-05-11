const CityController = require('../controllers/cityController.js')
const StreetsController = require('../controllers/streetsController.js')
const { QueryTypes } = require('sequelize')

const inputHandler = async (ws, msg) => {
    //console.log(msg)
    switch (msg.model) {
        case "City":
            CityController.create(ws, msg);
            break;
        case "Street":
            //CityController.create(ws, msg);
            StreetsController.create(ws, msg);
            break;
        /*
        case "input":
            //inputHandler(msg)
            break;
        case "update":
            //updateHandler(msg);
            break;
        case "delete":
            //deleteHandler(msg);
            break;
        */
        case "raw":
            if ('raw' in msg.request) {
                ws.send(JSON.stringify('Тект запроса не обнаружен'));
                return;
            }
            if (msg.request.raw.langth === 0) {
                ws.send(JSON.stringify('Тект запроса отсутствует'));
                return;
            }
            try {
                const raw = await sequelize.query(msg.request.raw, {
                    type: QueryTypes.SELECT, // тип запроса - выборка
                })
                ws.send(JSON.stringify(raw));
            } catch(e) {
                ws.send(JSON.stringify(`Ошибка выполнения необработанного запроса. Текст запроса: ${msg.request.raw} Ошибка: ${e}`));
            }
            break;
        default:
            console.log(`Module inputHandler. Нераспознанное собщение: ${msg}`)
    }
}

module.exports = inputHandler;