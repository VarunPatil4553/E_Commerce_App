const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema(
{
    name: {type: String, required: [true, 'name is required']},
    author: {type: Schema.Types.ObjectId, ref:'User'},
    details: {type: String, required: [true, 'details required'], minLength: [10, 'the details should at least have 10 characters']},
    category: {type: String, required: [true, 'category is required']},
    status: {type:String, required: [true,'Status is required'],enum:['Available','Offer pending','Traded']},
    image: {type: String, required: [true, 'Image is required']},
    offerName: { type:String },
    Offered:{type:Boolean},
    Watchlist: { type: Boolean },
},
{timestamps: true}
);

module.exports = mongoose.model('trades',tradeSchema);