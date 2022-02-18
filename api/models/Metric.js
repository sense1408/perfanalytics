const mongoose = require('mongoose');


const filesSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
      },
      source: {
        type: String,
        required: true
      },
      responseTime: {
        type: Number,
        required: true
      },
      executionTime: {
        type: Number,
        required: true
      },
      fetchTime: {
        type: Number,
        required: true
      }
});



const metricSchema = new mongoose.Schema({
    url: {
      type: String,
      required: true
    },
    ttfb: {
      type: Number
    },
    fcp: {
      type: Number
    },
    domLoad: {
      type: Number
    },
    windowLoadEvents: {
      type: Number
    },
    files: {
      type: [filesSchema]
    },
    timestamp: {
      type: String,
      required: true
    }
});


module.exports = mongoose.model('Metric', metricSchema);