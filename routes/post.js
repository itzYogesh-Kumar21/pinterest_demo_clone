const mongoose = require('mongoose');

// post k pass user ki id hogi
const postSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    title : String,
    description : String,
    image : String,
})


module.exports = mongoose.model('post', postSchema);