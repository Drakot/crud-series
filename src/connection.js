const mongoose = require("mongoose")

const user = "admin"
const password = "admin123"

const dbname = "multimedia"
const host = "cluster0.onojt.mongodb.net"

const uri = `mongodb+srv://${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

module.exports = mongoose.connect(uri,
 { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify : false ,useCreateIndex: true
 })