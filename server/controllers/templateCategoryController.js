const path = require('path');
const TemplatesCategory = require(path.join(__dirname, '..', 'models', 'TemplatesCategory.js'));
// var md5 = require('md5');


exports.getEntities = async (req,res) => {
    try {      
      let data = { data: TemplatesCategory , message: "user Listing" }
      res.status(200).json(data);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
}
