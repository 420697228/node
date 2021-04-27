const Koa = require('koa');
const app = new Koa();
// routes
const index = require('./routes/index')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')

app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))

// error handler
onerror(app)

app.use(json())

app.use(index.routes(), index.allowedMethods())

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.listen(8088,()=>{});