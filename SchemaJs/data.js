const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema(
    {
        menu: {
            logo : String,
            search_bar: String,
            iconos: Array,
        },
        profile: Array,
        home: {
            icons: Array,
            dots: String,
            bookmark: String,
            little_heart: String,
            emoji: String,
        },
        submenu: Array,
        footer: Array,
    },
    {
        collection: 'data',
        skipVersioning: true,
    }
)

const Data = new mongoose.model('Data', DataSchema)

module.exports = {Data}