const express = require('express')

const { getcart, getcarts, createcart, deletecart, updatecart } = require('../controllers/cartController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/', getcarts)

router.get('/:id', getcart)

router.post('/', createcart)

router.delete('/', deletecart)

router.patch('/', updatecart)

module.exports = router