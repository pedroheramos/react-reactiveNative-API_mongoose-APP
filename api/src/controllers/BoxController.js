const Box = require('../models/Box')


class BoxController{
    
    async store(req, res) {
        console.log(req)
        //const box = await Box.create({ title: req.body.title})
        const box = await Box.create(req.body)
        return res.json(box)
    }
    
    async show(req, res) {
        //const box = await Box.create({ title: req.body.title})
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {
                sort: {createdAt: -1}
            }
        })
        return res.json(box)
    }
}

module.exports = new BoxController()
