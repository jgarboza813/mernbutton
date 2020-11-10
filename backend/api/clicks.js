const express = require('express');
const router = express.Router();

const Clicks = require('../models/clicks');

router.get('/', async (req, res) => {
    try {
        const clicks = await Clicks.findOne();
        res.send(clicks);
    } catch (err) {
        console.log(err);
        res.status(400).end();
    }
});

router.post('/', async (req, res) => {
    const { newTotal } = req.body;
    const clicks = await Clicks.findOne();

    clicks.total = newTotal;
    clicks.save()
        .then(() => { res.send(clicks) })
        .catch(err => {
            console.log(err);
            res.status(400).end();
        });
})

module.exports = router;