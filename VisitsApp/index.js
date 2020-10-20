const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

const KEY = 'visits';

// Initialization
client.set(KEY, 0);

// Route
app.get('/', (req, res) => {
  client.get(KEY, (err, reply) => {
    res.send('Number of visits is: ' + reply);

    client.set(KEY, parseInt(reply) + 1);
  });
});

// Listen Port
app.listen(8081, () => {
  console.log('Listening on port 8081');
});