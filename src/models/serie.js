const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SerieSchema = new Schema({
   name: String,
   type: String,
   savedAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
})

const SerieModel = mongoose.model("serie", SerieSchema)

module.exports = SerieModel
