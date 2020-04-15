/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const express = require('express'),
  cors = require('cors'),
  bp = require('body-parser');
(app = express())((DB_NAME = 'characterdb'))((port = 3000));
app.use(bp.json({limit: '1mb'}));
app.use(cors());
app.use(express.static(__dirname + '/client/build'));

require('./server/utils/mongoose')(DB_NAME);

require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
