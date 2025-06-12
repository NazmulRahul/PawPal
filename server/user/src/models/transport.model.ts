import mongoose from 'mongoose'

const transportSchema = mongoose.Schema({
  owner: {
    type: Object,
    required: true,
  },
  pet: {
    type: Object,
    required: true,
  },
  travel: {
    type: Object,
    required: true,
  },
  agency: {
    type: Object,
    required: true,
  },
  document: {
    type: Object,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('transport', transportSchema);
