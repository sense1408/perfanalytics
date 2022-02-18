const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./connectDB');

const metricsRoutes = require('./routes/metrics');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

connectDB();

app.use('/metrics', metricsRoutes);

app.listen(3001, () => {
    console.log('Server is running ' + 3001);
})