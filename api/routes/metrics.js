const express = require('express');
const router = express.Router();

const { getMetrics, saveMetric } = require('../controllers/metrics');

router.get('/', getMetrics);
router.post('/', saveMetric);

module.exports = router;