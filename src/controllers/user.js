const controller = {}
const User = require("../models/user")

controller.deleteSerie = async (req, res) => {
    let user = req.params.user
    let serie = req.params.serie

    if (serie && user) {
        try {
            await User.findByIdAndUpdate(user, { $pull: { series: serie } })

            res.send()
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }

    } else {
        res.status(400).send("")
    }
}

module.exports = controller