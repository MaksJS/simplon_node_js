const http = require('http')

const PORT = 8080;
const server = http.createServer().listen(PORT)

server.on('connection', () => console.log(`Listening on port ${PORT}`))

server.on('request', (request, response) => {

    const {headers, method, url} = request
    const {statusCode} = response

    response.setHeader('Content-Type', 'text/html')
    response.write(
        `
        <html>
            <head>
            </head>
            <body>
                <h1>Hello !</h1>
                You tried to access to URL: ${url}
                <br />
                With method: ${method}
                <br />
                Status code is ${statusCode}
                <br />
                With headers: ${JSON.stringify(headers, null, '<br />')}
            </body>
            </html>
        `
    )
    response.end()
})