const http = require('http')
const fs = require('fs')

const PORT = 8080;
const VIEW_CONFIG = {
    DIRECTORY: 'views',
    EXTENSION: 'html',
}

const server = http.createServer().listen(PORT)

const send = (response, viewName, code = 200) => {

    response.statusCode = code
    response.setHeader('Content-Type', 'text/html')

    const viewPath = `${__dirname}/${VIEW_CONFIG.DIRECTORY}/${viewName}.${VIEW_CONFIG.EXTENSION}`

    console.info(`Trying to display view ${viewPath}`)

    fs.readFile(viewPath, 'utf8', (err, data) => {
        if (err) {
            response.statusCode = 500
            response.write(`View ${viewPath} not found`)
        }
        else {
            response.write(data)
        }
        response.end()
    })
}

server.on('connection', () => console.log(`Listening on port ${PORT}`))

server.on('request', (request, response) => {

    const {headers, method, url} = request
    const {statusCode} = response
    
    console.info(`Trying to reach ${method} ${url}`)
    
    switch (url) {
        case '/clients':
            switch (method) {
                case 'GET': // display client list
                    send(response, 'clients')
                case 'POST': // add a client
                    // TODO
            }
            break;
        case '/products':
            switch (method) {
                case 'GET': // display product list
                    send(response, 'products')
                case 'POST': // add a product
                    // TODO
            }
            break;
        default:
            send(response, '404', 404)
    }
})