const models = require('../models/models')

class CityController {
    async create(ws, msg) {
        console.log('msg')
        console.log(msg)
        try {
            var prm = {};
            for (var key in msg.request.where) {
                prm[key] = msg.request.where[key];
            }
            prm["admin_name"] = msg.admin_name;
            const rs = await models[msg.table].create(prm);
            return ws.send(JSON.stringify(rs));
        } catch(e) {
            console.log('Ошибка: ' + e)
            ws.send(JSON.stringify('Ошибка: ' + e));
        }
    }
    async getAll(ws, msg) {
        console.log(msg)
        try {
            if ('where' in msg){
                var rs = await models[msg.table].findAll({
                    where: msg.where,
                });
            } else {
                if ('attributes' in msg) {
                    var rs = await models[msg.table].findAll({
                        attributes: msg.attributes,
                    });
                } else {
                    var rs = await models[msg.table].findAll();
                }
            }
            var res = msg;
            res["data"] = rs; 
            return ws.send(JSON.stringify(res));
        } catch(e) {
            console.log('Ошибка getAll ' + e)
        }
    }
    async upDate (ws, msg) {
        try {
            await models[msg.table].update(msg.request.updata, {
                where: msg.request.where
            })
            const rs = await models[msg.table].findAll();
            var res = {};
            res["data"] = rs; 
            return ws.send(JSON.stringify(res));
        } catch (e) {
            console.log(e)
        }
    }
    async delete(ws, msg) {
        console.log(JSON.stringify(msg.request.where))
        if (JSON.stringify(msg.request.where).length < 3) return ws.send(JSON.stringify('CityController.delete: Не заданы условия для удаления'));
        try{
            console.log(msg)
            await models[msg.model].destroy({where: msg.request.where,});
            const rs = await models[msg.model].findAll();
            return ws.send(JSON.stringify(rs));
        } catch(e) {
            console.log(e)
            ws.send(JSON.stringify(`CityController.delete: ошибка удаления ${e}`));
        }

    }
}

module.exports = new CityController()