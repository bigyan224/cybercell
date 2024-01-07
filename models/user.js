const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://bigyanacharya224:bigyan2248@cybercell.evnggec.mongodb.net/?retryWrites=true&w=majority")

var userSchema= mongoose.Schema({
    name:String,
    course:String,
    admission_no:String,
    contact:Number,
    description:String,
    Date:{
        type:Date,
        default:Date.now()
    },

})

module.exports =mongoose.model("students",userSchema)