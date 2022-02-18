const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const compress = require('compression');
const cors = require('cors');

const connectDB = require('./connectDB');

const metricsRoutes = require('./routes/metrics');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(cors());
app.use(compress());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
 });


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
});



app.use('/metrics', metricsRoutes);

app.get('/perfanalytics.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../perfanalytics-lib', 'bundle.js' ))
})

app.listen(3001, () => {
    console.log('Server is running ' + 3001);
})