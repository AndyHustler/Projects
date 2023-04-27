require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const app = express()
const WSServer = require('express-ws')(app)
//для широковещательных рассылок
//const aWss = WSServer.getWss()
//const cors = require('cors')
const PORT = process.env.PORT || 5000
const fs = require('fs') //для работы с файловой системой
const path = require('path')//для работы с файловой системой

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
        console.log(JSON.parse(msg))
        msg = JSON.parse(msg)
        switch (msg.method) {
            case "connection":
                ws.send('Подключение установлено!')
                break
            case "post":
                postHandler(msg)
                break
            case "get":
                getHandler(msg)
                break
            case "delete":
                deleteHandler(msg)
                break
        }
    })
})

const postHandler = (msg) => {
    console.log(msg)
}

const getHandler = (msg) => {
    console.log(msg)
}
const deleteHandler = (msg) => {
    console.log(msg)
}

/*
app.post('/image', (req, res) => {
    try {
        const data = req.body.img.replace(`data:image/png;base64,`, '')
        fs.writeFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`), data, 'base64')
        return res.status(200).json({message: "Загружено"})
    } catch (e) {
        console.log(e)
        return res.status(500).json('error')
    }
})
app.get('/image', (req, res) => {
    try {
        const file = fs.readFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`))
        const data = `data:image/png;base64,` + file.toString('base64')
        res.json(data)
    } catch (e) {
        console.log(e)
        return res.status(500).json('error')
    }
})
*/



//функция для обработки входящих сообщений
//const connectionHandler = (ws, msg) => {
//    ws.id = msg.id
//    broadcastConnection(ws, msg)
//}

//функция делает широковещательну рассылку
//const broadcastConnection = (ws, msg) => {
//    aWss.clients.forEach(client => {
//        if (client.id === msg.id) {
            //client.send(JSON.stringify(msg))
//            client.send(`Пользователь ${msg.username} подключился`)
//        }
//    })
//}
