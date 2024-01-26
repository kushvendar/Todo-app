const mongoose=require("mongoose")
// not production worthy but just for this local app
mongoose.connect("mongodb+srv://jangidkush1234:jangidkush1234@kushcluster.ncdwqwe.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


const todo = mongoose.model('todos',todoSchema)

module.exports = { 
    todo 
}