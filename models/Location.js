const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  name: {  type: String, required: true },
  type: String,
  dimension: String,
  residents: [{ type: Schema.Types.ObjectId, ref: 'Character'}]
}, { timestamps: {} });

module.exports = model('Location', locationSchema);
