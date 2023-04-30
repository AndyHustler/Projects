const {City} = require('../models/models')

class CityController {
    async create(ws, msg) {
        console.log('create');
        try {
            const city = await City.create({city_name:msg.request.where.city_name,admin_name:msg.admin_name})
            return ws.send(JSON.stringify(city));
        } catch(e) {
            console.log('Ошибка: ' + e)
            ws.send(JSON.stringify('Ошибка: ' + e));
        }
    }
    async getAll(ws, msg) {
        if (msg.request.where.city_name.length === 0){
            var city = await City.findAll();
        } else {
            var city = await City.findAll({
                where: {
                    city_name: msg.request.where.city_name,
                }
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

module.exports = new CityController()