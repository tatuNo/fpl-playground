const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.use('/proxy', createProxyMiddleware({
  target: 'https://fantasy.premierleague.com/',
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '',
  },
}));

app.use('/ping', (_req, res) => {
  res.send('pong');
});

const { PROXY_PORT } = process.env;
app.listen(PROXY_PORT, () => {
  console.log(`Server running on port ${PROXY_PORT}`);
});
