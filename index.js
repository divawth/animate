const Koa = require('koa');
const app = new Koa();

app.use(
  ctx => {
    ctx.body = 'bihdas';
  }
);

app.listen(10001);