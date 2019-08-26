    const express = require('express')
    require('../model/mongoose')
    
    module.exports.setUpServer = () => {
        const app = express()
        
        const bodyParser = require('body-parser')
        const path = require('path')
        

        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

        app.use(require('../controller/index'))

        return app
    }
    console.log(' -> [configs ... OK]')