"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var authorize_1 = require("./../authorize");
router.post('/', authorize_1.authorize, function (req, res) {
    res.send('ur authorized');
});
exports.default = router;
