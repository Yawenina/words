const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/api', proxy({
  target: 'https://api.yawenina.com',
  changeOrigin: true
}));

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.port || 8080, () => {
  console.log('listening on port 8080');
});

module.exports = app;