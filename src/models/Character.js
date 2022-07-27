const { Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

characterSchema.plugin(mongoosePaginate);

module.exports = model('Character', characterSchema);
