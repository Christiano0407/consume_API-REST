const express = require(`express`);
const app = express();
const port = process.env.port || 3000;

app.get(`/`, (req, res) => {
  res.send(`../apiRest/js/apiApp.js`);
});

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}... `);
});
