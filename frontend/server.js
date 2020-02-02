const express = require('express');
const next = require('next');
const proxy = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/.netlify/functions/graphql-api', proxy({ target: 'http://localhost:34567', changeOrigin: true }))

    server.get('/dashboard/:id', (req, res) => {
      const actualPage = '/about';
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3999, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3999');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
