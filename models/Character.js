const { Schema, model} = require('mongoose');

const characterSchema = new Schema({
  name: {  type: String, required: true },
  status: { type: String, enum: ['Alive', 'Dead', 'unknown'], default: 'unknown' },
  species: String,
  type: String,
  gender: String,
  image: String,
  origin: { type: Schema.Types.ObjectId, ref: 'Location' },
  location: { type: Schema.Types.ObjectId, ref: 'Location' },
  episode: [{ type: Schema.Types.ObjectId, ref: 'Episode' }]
}, { timestamps: {} });

module.exports = model('Character', characterSchema);
