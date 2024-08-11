const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    taks: String
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel