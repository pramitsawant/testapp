const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const DesignSchema = new Schema({
  belongs_to : { 
    type: Schema.Types.ObjectId, 
    ref: 'users' 
  },
  title: {
    type: String,
    required: true
  },
  template_id: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },    
  url: {
    type: String,
  },
  tags: {
    type: Array,
  },  
  createdOn: {
    type: Date,
    default: Date.now
  }
});

DesignSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("design", DesignSchema);