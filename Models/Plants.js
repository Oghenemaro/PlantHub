
import mongoose from 'mongoose';

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



const plants = mongoose.model('Plant', plantSchema);

export default plants;