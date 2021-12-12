const os = require("os");

const currentOS = {
    user:os.cpus(),
    name:os.release(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);