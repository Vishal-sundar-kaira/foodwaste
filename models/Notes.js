const mongoose=require('mongoose');
const {Schema}=mongoose;
const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    Date:{
        type:String,
        default:Date.now
    }

})
const Notes=mongoose.model('Notes',NotesSchema)
module.exports=Notes