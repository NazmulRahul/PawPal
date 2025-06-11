const mongoose = require('mongoose');
import User from "./user.model"
const blogSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: Object,
        required: true,
    },
    isFeature: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: ['adoption', 'training', 'breeds', 'health and wellness', 'others'],
        default: 'others',
    },
});

export default mongoose.model('Blog', blogSchema);