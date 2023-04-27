const Router = require('express')
const router = new Router()
const brendController = require('../controllers/brandController')

router.post('/', brendController.create)
router.get('/', brendController.getAll)
router.delete('/', brendController.delete)
router.put('/', brendController.upDate)

module.exports = router