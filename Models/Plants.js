
const mongoose = require('mongoose');

const plantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true]
        },
        description: String,
    },
    {
        timestamps: true
    }
);



const Plants = mongoose.model('Plant', plantSchema);

module.exports = Plants;