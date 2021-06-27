const {userInfo, uptime, type, release, totalmem, freemem}  = require('os');

console.log(userInfo());
console.log(uptime());
console.log({
    type: type(),
    release: release(), 
    totalmem: totalmem(),
    freemem: freemem()
})