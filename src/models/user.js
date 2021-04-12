const mongoose = require("mongoose")
const SchemaMongo = mongoose.Schema

const Schema = new SchemaMongo({
    series: {type: SchemaMongo.Types.ObjectId, ref: 'series'},
    name: String
})

const Model = mongoose.model("user", Schema)

module.exports = Model