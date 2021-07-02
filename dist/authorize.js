"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
var authorize = function (req, res, next) {
    var name = req.query.name;
    if (name === "Mano") {
        console.log('your mano LOVE :O:');
        next();
    }
    else {
        res.status(401).send('UNOTHRIZED SORRY MA BOI :<');
    }
};
exports.authorize = authorize;
