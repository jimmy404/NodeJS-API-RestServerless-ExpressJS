const express = require('express');

const router = app.router();

router.get('/', (req, res) => {
    res.send('Hello meals')
});

router.post('/', (req, res) => {
    res.send('Post meals')
});

module.exports = router;
