const mongoose = require("mongoose")
const Schema = mongoose.Schema
const PlatformSchema = new Schema({
    name: String,
    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Model = mongoose.model("platform", PlatformSchema)

module.exports = Model
