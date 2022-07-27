const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const locationSchema = new Schema({
  name: {  type: String, required: true },
  type: String,
  dimension: String,
  residents: [{ type: Schema.Types.ObjectId, ref: 'Character'}]
}, { timestamps: {} });

locationSchema.plugin(mongoosePaginate);

module.exports = model('Location', locationSchema);
