const http = require('http')

const PORT = 8080;
const server = http.createServer().listen(PORT)

const send = (response, content, code = 200) => {
    response.statusCode = code
    response.setHeader('Content-Type', 'text/html')
    response.write(`
        <html>
            <head>
            </head>
            <body>
                ${content}
            </body>
        </html>
    `)
    response.end()
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
                    send(response, 'Client list')
                case 'POST': // add a client
                    // TODO
            }
            break;
        case '/products':
            switch (method) {
                case 'GET': // display product list
                    send(response, 'Product list')
                case 'POST': // add a product
                    // TODO
            }
            break;
        default:
            send(response, 'Not found', 404)
    }
})