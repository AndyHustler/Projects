const CityController = require('../controllers/cityController')

const inputHandler = (ws, msg) => {
    //console.log(msg)
    switch (msg.model) {
        case "city":
            console.log('city ' + msg)
            CityController.create(ws, msg);
            break;
        case "streets":
            //selectHandler(msg);
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
        default:
            console.log(`Module inputHandler. Нераспознанное собщение: ${msg}`)
    }
}

module.exports = inputHandler;