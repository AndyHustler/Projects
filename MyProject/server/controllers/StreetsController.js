const {Streets} = require('../models/models')

class StreetsController {
    async create(ws, msg) {
        try {
            const city = await Streets.create({city_name:msg.request.where.city_name,admin_name:msg.admin_name})
            return ws.send(JSON.stringify(city));
        } catch(e) {
            console.log('Ошибка: ' + e)
            ws.send(JSON.stringify('Ошибка: ' + e));
        }
    }
    async getAll(ws, msg) {
        if (JSON.stringify(msg.request.where).length < 3){
            var city = await Streets.findAll();
        } else {
            var city = await Streets.findAll({
                where: msg.request.where,
            });
        }
        return ws.send(JSON.stringify(city));
    }
    /*
    upDate (req, res) {
        const {upData} = req.body
        const {upWhere} = req.body
        try {
            City.update({upData}, {
                where: {upWhere}
            })
        } catch (e) {
            console.log(e)
        }
    }
    delete(req,res) {
        const {name} = req.body
        try{
            City.destroy(
            {where: {name}}
            )
        
        } catch(e) {
            console.log(e)
        }
    }
    */
}

module.exports = new StreetsController()