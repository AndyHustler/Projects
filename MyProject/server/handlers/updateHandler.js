const updateHandler = (ws, msg) => {
    console.log(msg)
    switch (msg.model) {
        case "city":
            ws.send(JSON.stringify(CityController.getAll()));
            break;
        case "streets":
            selectHandler(msg);
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
            console.log(`Module updateHandler. Нераспознанное собщение: ${msg}`)
    }
}

module.exports = updateHandler