const express = require('express');
const app = express();

app.post('/flutterwave-webhook', (req, res) => {
  const eventData = req.body;
  // Process the event data here
  console.log(eventData);

  // Respond to Flutterwave
  res.sendStatus(200);
});



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
