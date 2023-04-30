require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const app = express()
const WSServer = require('express-ws')(app)
const selectHandler = require('./handlers/selectHandler')
const inputHandler = require('./handlers/inputHandler')
const updateHandler = require('./handlers/updateHandler')
const deleteHandler = require('./handlers/deleteHandler')
//const models = require('./models/models.js')
//для широковещательных рассылок
//const aWss = WSServer.getWss()
//const cors = require('cors')
const PORT = process.env.PORT || 5000
//const fs = require('fs') //для работы с файловой системой
//const path = require('path')//для работы с файловой системой

//app.use(cors())
app.use(express.json())


const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

app.ws('/', (ws, req) => {
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        switch (msg.action) {
            case "connection":
                ws.send('Подключение установлено!');
                break;
            case "select":
                selectHandler(ws, msg);
                break;
            case "input":
                inputHandler(ws, msg)
                break;
            case "update":
                updateHandler(ws, msg);
                break;
            case "delete":
                deleteHandler(ws, msg);
                break;
            default:
                console.log(`Module index. Нераспознанное собщение: ${msg}`)
        }
    })
})

//module.exports = app()