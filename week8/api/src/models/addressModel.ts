import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  country: String,
  zip: String,
  people: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }]
})

export default mongoose.model('Address', addressSchema)
