"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var data_1 = require("./../data");
router.get('/', function (req, res) {
    res.send('its me again');
});
router.get('/products/:productName', function (req, res) {
    var productName = req.params.productName;
    var specifiedPrduct = data_1.data.find(function (product) { return product.name === productName; });
    if (!specifiedPrduct) {
        return res.send('product Not Found ');
    }
    return res.json(specifiedPrduct);
});
router.get('/v2/products/query', function (req, res) {
    var _a = req.query, limit = _a.limit, search = _a.search;
    var data2 = data_1.data.map(function (item, index) {
        item.name = item.name.toLocaleLowerCase();
        return item;
    });
    var specifiedPrduct2 = data2;
    if (search) {
        specifiedPrduct2 = specifiedPrduct2.filter(function (ele) { return ele.name.includes(search); });
    }
    if (limit) {
        if (typeof Number(limit) === 'number') {
            specifiedPrduct2 = specifiedPrduct2.slice(0, Number(limit));
        }
    }
    if (specifiedPrduct2.length < 1) {
        return res.status(200).json({ sucess: true, data: [] });
    }
    return res.status(200).json({ sucess: true, data: specifiedPrduct2 });
    //    return  res.json(specifiedPrduct)
});
exports.default = router;
