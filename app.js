const config = require('./config/config')
const port = process.argv[2] || 3000
const app = config.setUpServer()

app.listen(port, () => {
    console.log('-----------------------\n|      SERVER ON!     |\n|     Porta: ' + port + '     |\n-----------------------')
})