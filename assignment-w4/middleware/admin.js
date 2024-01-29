function adminMiddleware (req, res, next) {
    // logic
    const username = req.headers.username;
    const password = req.headers.password;
    res.json({
        message : "Admin created successfully"
    })
}

module.exports = adminMiddleware;