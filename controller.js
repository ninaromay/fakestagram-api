const { Data }      = require('./SchemaJs/data')
const { Suggested } = require('./SchemaJs/suggested')
const { User }      = require('./SchemaJs/users')

const getAll = async (req, res) => {
    let data = await Data.find()
    console.log(data);
    let suggested = await Suggested.find()
    let users = await User.find()

    let condition = data.length > 0 && suggested.length > 0 && users.length > 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'Not found'

    console.log( data )
    let [objeto] = data 
    let response = {data : objeto, suggested, users, status, error}
    res.status(200).json(response)
}

module.exports = {
    getAll
}