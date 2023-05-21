import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  addresses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address'
  }],
  hobbies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobby'
  }]
})

export default mongoose.model('Person', personSchema)
