console.log('1')
setTimeout(()=>{
    console.log('2')
},0)
console.log('3')

// Here aysnc is also async, so offloaded

console.log('4')
setTimeout(()=>{
    console.log('5')
},0)
console.log('6')
setTimeout(()=>{
    console.log('7')
},0)
console.log('8')