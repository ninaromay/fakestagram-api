console.clear();

let express = require('express')
let cors = require('cors')
let morgan = require('morgan')
let mongoose = require('mongoose')

const {router} = require('./router')

let user = process.env.USER
let password = process.env.PASSWORD

let url =  process.env.USER ? 'mongodb+srv://'+user+':'+password+'@cluster0.cn3nl3k.mongodb.net/fakestagram?retryWrites=true&w=majority' :  'mongodb://localhost:27017/fakestagram'
// let url =  process.env.USER && 'mongodb+srv://'+user+':'+password+'@cluster0.cn3nl3k.mongodb.net/fakestagram?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then( () => {console.log('Conectado a mongoose');} )
    .catch(err => console.log(err))

let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use(router)


let puerto = process.env.PORT || 3010
app.listen(puerto, () =>  
console.log('Inicializing Fakestagram Api'))