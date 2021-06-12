const {readFileSync , writeFileSync} = require('fs');  //the method inside fs to access dorectly the same used in React

console.log('Start')
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first,second)

// writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`)  //If file is not there it will create, if any file is there it will replaces it

writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag: 'a'}) //This will append to the current file

console.log('done with the task')
console.log('starting the next one')
