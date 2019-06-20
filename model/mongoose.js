const mongoose = require('mongoose')

mongoose.connect('mongodb://u6blkgwg3d4g97itksti:AbZCOajGFWjbog9c8QWo@bi9x6wdqnbxmryv-mongodb.services.clever-cloud.com:27017/bi9x6wdqnbxmryv', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) return console.log(err)
    console.log('[mongoose service ... OK]')
})