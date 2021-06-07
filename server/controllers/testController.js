


exports.addEntity = async (req,res) => {  
    let data = { data: "data" , message: "Created!" }
    res.json(data);
}

exports.getEntities = async (req,res) => {      
    let data = { data: [] , message: "Listing" }
    res.json(data);
}

exports.getEntityById = async (req,res) => {
  const user_id = req.params.id;      
  let data = { data: [] , message: "Returned!" }
  res.json(data);
}

exports.deleteEntityById = async (req,res) => {
    const user_id = req.params.id;      
    let data = { data: [] , message: "Deleted!" }
    res.json(data);    
}

exports.updateEntityById = async (req,res) => {
    const user_id = req.params.id;      
    let data = { data: [] , message: "Updated!" }
    res.json(data);
}