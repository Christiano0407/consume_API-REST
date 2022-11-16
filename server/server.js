const express = require(`express`);
const app = express();
const port = process.env.port || 3000;

//const apiPlus = require(`../apiRest/js/apiApp`);

app.get(`/`, (req, res) => {
  res.send('Hello World');
});

//app.use(apiPlus);

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}... `);
});
