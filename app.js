// Local Dependency - can be used in only that particular project
// npm i <Packagename>

// Global dependency - can be used globally
// npm i -g <Packagename>
// sudo npm i -g <Packagename> (Mac)

// package.json - manifest file stores imp info about project
// Manual  create package.json in root and create properties
// npm init (step by step questions)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)