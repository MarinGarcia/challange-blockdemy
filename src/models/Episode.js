const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const episodeSchema = new Schema({
  name: {  type: String, required: true },
  air_date: String,
  episode: String,
  characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }]
}, { timestamps: {} });

episodeSchema.plugin(mongoosePaginate);

module.exports = model('Episode', episodeSchema);
