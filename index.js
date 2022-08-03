console.clear();

let express = require('express')
let cors = require('cors')
let morgan = require('morgan')
let mongoose = require('mongoose')

const {router} = require('./router')

mongoose.connect('mongodb://localhost:27017/fakestagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then( () => {console.log('Conectado a mongoose');} )
.catch(err => console.log(err))

let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use(router)

app.listen(3010, () =>  
console.log('Inicializing Fakestagram Api'))