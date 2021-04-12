const controller = {}
const Serie = require("../models/serie")
const Platform = require("../models/platform")


controller.stats = async (req, res) => {
    try {
        const series = await Serie.find().estimatedDocumentCount()

        const aggregatorOpts = [
            {
                $group: {
                    _id: "$platform",
                    count: { $sum: 1 }
                }
            }
        ]

        const platformData = await Serie.aggregate(aggregatorOpts).exec()
        const platforms = []

        for (const key in platformData) {
            const element = platformData[key];
            const platformItem = await Platform.findById(element._id)
            if (platformItem) {
                platforms.push({
                    count: element.count,
                    name: platformItem.name
                })
            }
        }

        res.json({ series: series, platforms: platforms })

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = controller