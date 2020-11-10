const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clicksSchema = new Schema({
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Clicks", clicksSchema, "clicks");