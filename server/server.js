const express = require(`express`);
const app = express();
const port = process.env.port || 3000;

//const apiPlus = require(`../apiRest/js/apiApp.js`);

app.get(`/`, (req, res) => {
  res.send('Hello World');
});

app.get(`/api/v1/cat`, (req, res) => {
  res.send('Hello Cat');
});

//app.use(`/cats`, apiPlus);

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}.... `);
});
