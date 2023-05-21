import mongoose from 'mongoose'

const hobbySchema = new mongoose.Schema({
  name: String,
  people: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }]
})

export default mongoose.model('Hobby', hobbySchema)
