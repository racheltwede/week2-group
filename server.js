const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use('/professional', require('./professional-routes'));
app.listen(port, () => {
  console.log('Server is listening at port' + port);
});