const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const route = require('koa-route')
const uuid = require("uuid")

const main = ctx => {
    ctx.response.body = { a: 1 }
}

app.use(main);
app.listen(8080);
