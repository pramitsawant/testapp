const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  template_id: {
    type: String,
    required: true
  },
  template_category_id: {
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

TemplateSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("template", TemplateSchema);