const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    model: {type: String, required: true },
    price: {type: Number, required: true, min: 0},
    size: {type: Number, required: true, size: 1},
    bought_time: {type: Date, required: true},
    comment: {type: String, default: true},
    created_time: {type: Date, required: true, default: Date.now()},
    owner: {type: Types.ObjectId, ref: 'User'},
    likes: {type: Number, required: true, default: 0, min: 0}
})

module.exports = model('Car', schema)