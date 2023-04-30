const CityController = require('../controllers/cityController')
const { QueryTypes } = require('sequelize')

const selectHandler = async (ws, msg) => {
    console.log(msg)
    switch (msg.model) {
        case "city":
            console.log("selectHandler city")
            CityController.getAll(ws,msg);
            break;
        case "streets":
            //ws.send(JSON.stringify(StreetsController.getAll()));
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
                try {
                const raw = await sequelize.query(msg.request.raw, {
                    type: QueryTypes.SELECT, // тип запроса - выборка
                })
                } catch(e) {
                    ws.send(JSON.stringify(`Ошибка выполнения необработанного запроса. Текст запроса: ${msg.request.raw} Ошибка: ${e}`));
                }
                ws.send(JSON.stringify(raw));
            } else {
                ws.send(JSON.stringify('Тект запроса не обнаружен'));
            }
        default:
            console.log(`Module selectHandler. Нераспознанное собщение: ${msg}`)
    }
}

module.exports = selectHandler