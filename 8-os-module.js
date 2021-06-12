// OS Module: methods and properties for interaciting with Operating System

const os = require("os")  //since it is built in module

// info about current user
const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds

console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)

