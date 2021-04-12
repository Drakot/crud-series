const controller = {}
const Platform = require("../models/platform")

controller.savePlatform = async (req, res) => {
    let name = req.body.name
    let logo = req.body.logo

    if (!name || !logo) {
        res.status(400).send()
        return
    }

    try {
        const platform = new Platform({ name: name, logo: logo })
        await platform.save()
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


controller.getPlatforms = async (req, res) => {
    const filter = req.query.filter
    try {
        const query = {
            name: new RegExp(filter, 'i')
        }

        const platforms = await Platform.find(query)
        res.json(platforms)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getPlatform = async (req, res) => {
    const id = req.params.id
    try {
        const platform = await Platform.findById(id)
        res.json(platform)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.updatePlatform = async (req, res) => {
    const name = req.body.name
    const logo = req.body.logo

    if (name && logo) {
        try {
            await Platform.findByIdAndUpdate(req.params.id, { name: name, logo: logo, updatedAt: Date.now() })
            res.status(204).send()
        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.status(400).send()
    }
}


controller.deletePlatform = async (req, res) => {
    let id = req.params.id
    try {
        await Platform.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


module.exports = controller