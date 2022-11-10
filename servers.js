// 📁 servers.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/page', (req, res) => {
    res.app.set("view engine", "ejs");
    res.locals.req = JSON.stringify({
        "protocol": req.protocol,
        "originalUrl": req.originalUrl,
        "subdomains": req.subdomains,
        "baseUrl": req.baseUrl,
        "path": req.path,
        "hostname": req.hostname,
    });
    res.render(path.join(path.resolve(), "site", "page.ejs"));
})

module.exports = router;