const router = require('express').Router();
const request = require('request');

router.get('/tag', (req, res, next) => {
    request.get('http://cs-mock-timeseries-api.azurewebsites.net/api/tag', (err, response, body) => {
        res.status(200).send(body).end()
    })
});

module.exports = router;