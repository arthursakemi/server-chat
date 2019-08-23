console.log(' -> [controllers ... OK]')
const path = require('path')
const express = require('express'),
    router = express.Router()

const socket = require('./chat/socket')

    //Middlewares
const logMiddleware = require('../middlewares/logger')

// Routes in use

router.use('/', logMiddleware, socket)
        
router.use('/chat', logMiddleware, (req, res) => {
    res.send('página de chat')
})

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('404 - Page Not Found')
})

module.exports = router