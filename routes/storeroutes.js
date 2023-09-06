const express =  require('express')

const { getitems, getitem, createitem, deleteone, updateitem, getMine } = require('../controllers/controlstore')

const requireAuth = require('../middleware/requireAuth')

const routes = express.Router()

routes.get('/',
    getitems
)

routes.get('/:id',
    getitem
)

routes.post('/',
    createitem
)

routes.delete('/:id',
    deleteone  
)

routes.patch('/:id',
    updateitem
)

routes.get('/mine',
    getMine
)

module.exports = routes
