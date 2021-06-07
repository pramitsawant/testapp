const path = require('path');
const Templates = require(path.join(__dirname, '..', 'models', 'Templates.js'));
const mongoosePaginate = require('mongoose-paginate-v2');
// var md5 = require('md5');

exports.addEntity = async (req,res) => {  
    // let {username,,password} = user
    let entity = new Templates(req.body);
    try {
      const result = await entity.save();
      let data = { data: result , message: "Created!" }
      res.status(200).json(data);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }  
}

exports.getEntities = async (req,res) => {
  let options = {
    page: 1,
    limit: 10,
    collation: {
      locale: 'en',
    },
  };

  var conditions = { }
  try {
    const result = await  Templates.paginate(conditions, options);    
    let data = { data: result , message: "Listing" }
    res.status(200).json(data);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

exports.getEntityById = async (req,res) => {
    const user_id = req.params.id;      
    try {
      const result = await Templates.findById(user_id).exec();
      let data = { data: result , message: "Returned!" }
      res.status(200).json(data);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
}

exports.deleteEntityById = async (req,res) => {
    const user_id = req.params.id;      
    try {
      const result = await Templates.remove({ _id: user_id });
      let data =  {}
      if(result.deletedCount){
        data = { data: {} , message: "Deleted!" }
      }
      else{
        data = { data: {} , message: "No item to delete!" }
      }
      res.status(200).json(data);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
}

exports.updateEntityById = async (req,res) => {
    // let payload = {}
    // if (req.body.fullname) {
    //   payload.fullname = req.body.fullname;
    // }
    // if (req.body.email) {
    //   payload.email = req.body.email;
    // }
    // if (req.body.password) {
    //   payload.password =req.body.password;
    // }
    var conditions = { _id: req.params.id }
    var update = { $set: req.body }
    try {
      const result = await Templates.updateOne(conditions, update).exec();
      let data =  {}// {data: result, message: "Updated!"}
      if(result.nModified){
      data = { data: {} , message: "Updated!" }
      }
      else{
        data = { data: {} , message: "Already Updated!" }
      }
      res.status(200).json(data);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
}