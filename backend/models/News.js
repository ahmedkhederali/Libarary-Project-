const mongoose = require('mongoose');
const NewsSchema = new mongoose.Schema({
    new_name: {
        type: String,
        required: true
    },
    description_new: {
        type: String,
        required: true,
    },
    date_of_new:{
        type:String,
        default: Date.now
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    image_new:{
        type:String,
        default:false
    }
}, { versionKey: false });

const News = mongoose.model('News', NewsSchema);
module.exports = News;