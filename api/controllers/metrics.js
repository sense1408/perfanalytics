const Metric = require('../models/Metric');

async function saveMetric(req, res) {
    try {
        return res.status(201);
    }catch(e) {
        return res.status(500);
    }
}


async function getMetrics(req, res) {
    try {
        let startRange, endRange;
        const data = await Metric.find().lean().exec();



        return res.json({ success: true, data })
    } catch(e) {
        return res.status(500);
    }
}   



module.exports = {
    saveMetric,
    getMetrics,
}