const http = require("http")
const { URL } = require("url");

const routes = require("./routes")

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(`http://localhost:3000${req.url}`);

    console.log(`Request Method: ${req.method}, Endpoint: ${parsedUrl.pathname}`)

    let { pathname } = parsedUrl
    let id = null;

    const splitEndpoint = pathname.split("/").filter(Boolean)

    if(splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`
        id = splitEndpoint[1]
    }

    const route = routes.find(routeObj => routeObj.path === pathname && routeObj.method === req.method)

    if(route) {
        req.query = Object.fromEntries(parsedUrl.searchParams)
        req.params = { id }
        route.handler(req, res)
    } else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end(`Cannot ${req.method} ${parsedUrl.pathname}`)
    }
})

server.listen(3000, () => {
    console.log("🚀 Server is running on port 3000")
})
