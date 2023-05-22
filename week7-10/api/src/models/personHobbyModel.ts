import mongoose from 'mongoose'

const personHobbySchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  },
  hobby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobby'
  }
})

export default mongoose.model('PersonHobby', personHobbySchema)