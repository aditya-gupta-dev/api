import { Hono } from "hono";
import { logger } from "hono/logger";
import userRoute from "./routes/user";

const app = new Hono()
const PORT = parseInt(Bun.env.PORT ?? "3000", 0)

const indexHtml = Bun.file('templates/index.html').text()

app.use(logger())

app.route('/user', userRoute)

app.get('/', async (ctx) => {
    return ctx.html(indexHtml)
})

const server = Bun.serve({
    fetch: app.fetch,
    port: PORT
})

console.log('Running on port:', server.port);
