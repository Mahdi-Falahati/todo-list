const mongoose= require("mongoose");

const todoSchema=({
    text:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('ToDo',todoSchema)