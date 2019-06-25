console.log(' -> [controllers ... OK]')
const express = require('express'),
    router = express.Router()

//Middlewares
const logMiddleware = require('../middlewares/logger')

// Routes in use
router.use('/chat', logMiddleware, (req, res) => {
    res.send('página de chat')
})

router.use('/', logMiddleware, (req, res) => {
    res.send('página de login')
})


// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('404 - Page Not Found')
})

module.exports = router