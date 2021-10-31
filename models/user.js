const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    hashed_password: { type: String, default: '' },
    full_name: { type: String, required: true },
})

module.exports = model('User', schema)