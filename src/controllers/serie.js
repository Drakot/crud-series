const controller = {}
const Serie = require("../models/serie")

controller.saveSerie = async (req, res) => {
    let name = req.body.name
    let type = req.body.type

    if (!name || !type) {
        res.status(400).send()
        return
    }

    try {
        const serie = new Serie({ name: name, type: type })
        await serie.save()
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


controller.getSeries = async (req, res) => {
    const filter = req.query.filter
    try {
        const series = await Serie.find({name: filter})
        res.json(series)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.getSerie = async (req, res) => {
    const id = req.params.id
    try {
        const serie = await Serie.findById(id)
        res.json(serie)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

controller.updateSerie = async (req, res) => {
    const name = req.body.name
    const type = req.body.type

    if (name && type) {
        try {
            await Serie.findByIdAndUpdate(req.params.id, { name: name, type: type, updatedAt: Date.now() })
            res.status(204).send()
        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.status(400).send()
    }
}


controller.deleteSerie = async (req, res) => {
    let id = req.params.id
    try {
        await Serie.findByIdAndDelete(id)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


module.exports = controller