const {City} = require('../models/models')

class CityController {
    async create(ws, msg) {
        try {
            const city = await City.create({city_name:msg.request.where.city_name,admin_name:msg.admin_name})
            return ws.send(JSON.stringify(city));
        } catch(e) {
            console.log('Ошибка: ' + e)
            ws.send(JSON.stringify('Ошибка: ' + e));
        }
    }
    async getAll(ws, msg) {
        if (JSON.stringify(msg.request.where).length < 3){
            var city = await City.findAll();
        } else {
            var city = await City.findAll({
                where: msg.request.where,
            });
        }
        return ws.send(JSON.stringify(city));
    }
    upDate (ws, msg) {
        try {
            City.update(msg.request.updata, {
                where: msg.request.where
            })
        } catch (e) {
            console.log(e)
        }
    }
    async delete(ws, msg) {
        console.log(JSON.stringify(msg.request.where))
        if (JSON.stringify(msg.request.where).length < 3) return ws.send(JSON.stringify('CityController.delete: Не заданы условия для удаления'));
        try{
            console.log(msg)
            await City.destroy({where: msg.request.where,});
            return ws.send(JSON.stringify(City.findAll()));
        } catch(e) {
            console.log(e)
            ws.send(JSON.stringify(`CityController.delete: ошибка удаления ${e}`));
        }

    }
}

module.exports = new CityController()