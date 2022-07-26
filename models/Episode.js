const { Schema, model } = require('mongoose');

const episodeSchema = new Schema({
  name: {  type: String, required: true },
  air_date: String,
  episode: String,
  characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }]
}, { timestamps: {} });

module.exports = model('Episode', episodeSchema);
