const util = require('util')
const gc = require('../config/')

const bucket = gc.bucket('mgames_apps')

const { format } = util

const uploadImage = (file, folder) => new Promise((resolve, reject) => {
  let { name, data } = file
  name = new Date().getTime()+"."+name.split(".")[1]  
  const blob = bucket.file(folder+name.replace(/ /g, "_"))
  const blobStream = blob.createWriteStream({
    resumable: false
  })
  blobStream.on('finish', () => {
    const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`)
    resolve(publicUrl)
  })
  .on('error', (error) => {
    console.log(error)
    reject(`Unable to upload image, something went wrong`)
  })
  .end(data)

})

module.exports = uploadImage