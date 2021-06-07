const Cloud = require('@google-cloud/storage')
const path = require('path')
require('dotenv').config()


const serviceKey = path.join(__dirname, './keyFile.json')

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: process.env['GCLOUD_PROJECT'],
})

module.exports = storage