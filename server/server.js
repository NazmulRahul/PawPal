"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 5000;
// Middleware
app.use(express_1.default.json());
// Routes
app.get("/", function (req, res) {
    res.send("Hello, TypeScript with Express!");
});
// Start Server
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
