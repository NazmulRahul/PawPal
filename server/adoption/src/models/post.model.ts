import { required } from 'joi'
import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        default: "Unknown",
        required: false
    },
    name: {
        type: String,
        default: "Pet",
        required: false
    },
    description: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: null
    },
    sex: {
        type: String,
        required: false,
        default: "Unknown"
    },
    vaccine: {
        type: [String],
        required: false,
        default: "Unknown"
    },
    image: {
        type:[String],
        required:true
    },
    address: {
        addressSchema
    },
    isAdopted: {
        type: Boolean,
        default: false
    },
    adoptedBy: {
        type: String,
        required: false,
        default: "Unknown"
    }
},
    {
        timestamps: true,
    })

export default mongoose.model("Post", postSchema)