import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isTransporter: {
        type: Boolean,
        requried: true,
        default: false,
    }

},
    {
        timestamps: true,
    })

export default mongoose.model("User", userSchema)