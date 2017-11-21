const router = require('express').Router();
const request = require('request');
const queryString = require('querystring');

router.get('/tag', (req, res, next) => {
    request.get('http://cs-mock-timeseries-api.azurewebsites.net/api/tag', (err, response, body) => {
        res.status(200).send(body).end()
    });
});

router.post('/details', (req, res, next) => {
    const id = req.body[0];
    const start = req.body[1];
    const end = req.body[2];
    const query = queryString.stringify({
        startTs: start,
        endTs: end
    });
    request.get(`http://cs-mock-timeseries-api.azurewebsites.net/api/DataPoint/${id}?${query}`, (err, response, body) => {
        res.status(200).send(body).end();
    });
});

module.exports = router;