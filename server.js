const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/api', proxy({
  target: 'https://api.yawenina.now.sh',
  changeOrigin: true
}));

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

module.exports = app;