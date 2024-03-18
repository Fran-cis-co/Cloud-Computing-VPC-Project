const router = require('express').Router();
const mongo = require('../db');

router.use((req, res, next) => {
    next();
});

router.use('/', async (req, res) => {
    try {
        const tasks = await mongo.find();

        res.json(tasks);
    } catch (error) {
        res.status(500).json(error.toString());
    }
});

module.exports = router;