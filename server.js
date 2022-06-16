const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)

server.listen(8000,()=>{
    console.log('server listening on port 8000')
})