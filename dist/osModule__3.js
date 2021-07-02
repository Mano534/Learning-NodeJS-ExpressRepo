"use strict";
var _a = require('os'), userInfo = _a.userInfo, uptime = _a.uptime, type = _a.type, release = _a.release, totalmem = _a.totalmem, freemem = _a.freemem;
console.log(userInfo());
console.log(uptime());
console.log({
    type: type(),
    release: release(),
    totalmem: totalmem(),
    freemem: freemem()
});
