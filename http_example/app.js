const http = require('http')
const PORT = 8080
const {readFile} = require('fs')
const {join} = require('path')

const server = http.createServer().listen(PORT)

const send = (response, viewName, code = 200) => {
    response.statusCode = code
    response.setHeader('Content-Type', 'text/html')
    const filename = `${__dirname}/views/${viewName}.html`
    readFile(filename, 'utf8', (err, data) => {
        if (err) {
            response.statusCode = 500
            response.write('Internal server error')
        }
        else {
            response.write(data)
        }
        response.end()
    })
}

//server.on('connection', () => console.log(`Listening on port ${PORT}`))

server.on('request', (request, response) => {
    
    const {headers, method, url} = request
    const {statusCode} = response

    response.setHeader('Content-Type', 'text/html')
    
    if (url.includes('clients')) {
        const id = url.split('/')[2]
        switch (method) {
                case 'GET':
                    send(response, 'clients/index')
                    break;
                case 'POST':
                    send(response)
                    break;
                case 'PATCH':
                    if (id != null) {
                        send(response)
                    }
                    else {
                        send(response, `Bad request`, 400)
                    }
                    break;
                default:
                    send(response, 'Method not allowed', 405)
            }
    }
    else {
        send(response, '404', 404)
    }
})