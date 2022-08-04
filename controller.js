const { Data }      = require('./SchemaJs/data')
const { Suggested } = require('./SchemaJs/suggested')
const { User }      = require('./SchemaJs/users')

const getAll = async (req, res) => {
    let data = await Data.find()
    let suggested = await Suggested.find()
    let users = await User.find()

    let condition = data.length > 0 && suggested.length > 0 && users.length > 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'Not found'

    let [objeto] = data 
    let response = {data : objeto, suggested, users, status, error}
    res.status(200).json(response)
}

const getTagged = async (req, res) => {
    let data = await User.find()

    let {tag} = req.params
    let tagged_posts = []
    data.map((obj)=>{
        // console.log(obj.posts);
        // obj.posts.map((post)=>{
        //     let tag = post.tags.length > 0
        //     if(tag){
        //       let tagged = post.filter( tags => obj.user.url === tags.tag )
        //       tagged_posts.push(tagged);
        //       console.log(tagged_posts);
        //     }
        // })
        
        let tagged = obj.posts.filter(post => {
            if(post.tags.length !== 0) {
                return post.tags.map(tug => {
                    if(tag === tug){
                        tagged_posts.push(post)
                    }
                })
            }
        })

    })

    console.log(tagged_posts);

    let condition = data.length > 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'Not found'

    let response = {tagged_posts, status, error}
    res.status(200).json(response)
}

module.exports = {
    getAll, getTagged
}