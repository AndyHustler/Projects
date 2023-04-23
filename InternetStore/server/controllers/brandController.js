const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req,res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req,res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    upDate (req, res) {
        const {upData} = req.body
        const {upWhere} = req.body
        try {
            Brand.update({upData}, {
                where: {upWhere}
            })
        } catch (e) {
            console.log(e)
        }
    }
    delete(req,res) {
        const {name} = req.body
        try{
            Brand.destroy(
            {where: {name}}
            )
        
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = new BrandController()
