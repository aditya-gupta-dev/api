import { Hono } from "hono";

const userRoute = new Hono()

userRoute.post('/', async (ctx) => { 
    return ctx.json(await ctx.req.formData())
})

export default userRoute; 