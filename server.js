const express =  require('express')

const globalroutes = require('./routes/global')

const path = require('path')

const cors = require('cors')

const dotenv = require('dotenv').config()

const { default:mongoose } = require('mongoose')

const storeroutes =  require('./routes/storeroutes')

const systemroutes = require('./routes/system')

const userroutes = require('./routes/users')

const toprated = require('./routes/topRated')

const cartRoutes = require('./routes/cart')

const app = express()

app.use(cors({
    origin:['https://slbuisnesstree.netlify.app', 'https://slbuisnesstree.netlify.app/login', 'https://slbuisnesstree.netlify.app/signup', 'https://slbuisnesstree.netlify.app/global', 'https://slbuisnesstree.netlify.app/order', 'https://slbuisnesstree.netlify.app/order/back/getorders','https://slbuisnesstree.netlify.app/cart','http://localhost:3000', 'http://localhost:3000/login', 'http://localhost:3000/signup', 'http://localhost:3000/global', 'http://localhost:3000/order','http://localhost:3000/search', 'http://localhost:3000/order/back/getorders', 'http://localhost:3000/cart','http://localhost:3000/mine','http://localhost:3000/update/:id','http://localhost:3000/description','https://slbusinesstree.netlify.app', 'https://slbusinesstree.netlify.app/login', 'https://slbusinesstree.netlify.app/signup', 'https://slbusinesstree.netlify.app/global', 'https://slbusinesstree.netlify.app/order', 'https://slbusinesstree.netlify.app/order/back/getorders','https://slbusinesstree.netlify.app/cart', 'https://slbusinesstree.netlify.app/mine','https://slbusinesstree.netlify.app/update/:id','https://slbusinesstree.netlify.app/search','https://slbusinesstree.netlify.app/description'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH']
}))

app.use(express.json())

app.use('/',(req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/items', storeroutes)
app.use('/api/system', systemroutes)
app.use('/api/users', userroutes)
app.use('/api/global', globalroutes)
app.use('/api/toprated', toprated)
app.use('/api/cart', cartRoutes)

mongoose.connect(
    process.env.MONGOOSE
).then(
    app.listen(process.env.PORT, () => {
        console.log('App listening on port',process.env.PORT)
        console.log('DB uri is', process.env.MONGOOSE)
    })
)
