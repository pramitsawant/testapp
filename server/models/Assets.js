const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  belongs_to : {
    type: Schema.Types.ObjectId, 
    ref: 'users',
    required: false
  },
  public: {
    type: Boolean,
    default: true
  },
  url: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

AssetSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("asset", AssetSchema);