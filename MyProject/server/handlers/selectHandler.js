const CityController = require('../controllers/cityController.js')
const StreetsController = require('../controllers/streetsController.js')
const { QueryTypes } = require('sequelize')

const selectHandler = async (ws, msg) => {
    //console.log(msg)
    switch (msg.table) {
        case "City":
            //CityController.getAll(ws,msg);
            //break;
        case "Street":
            CityController.getAll(ws,msg);
            //StreetsController.getAll(ws,msg);
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
            console.log(`Module selectHandler. Нераспознанное собщение: ${msg}`)
    }
}

module.exports = selectHandler