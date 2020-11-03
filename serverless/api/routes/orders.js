const express = require('express');

const router = app.router();

router.get('/', (req, res) => {
    res.send('Hello orders')
});

router.post('/', (req, res) => {
    res.send('Post orders')
});

module.exports = router;
