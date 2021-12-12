const path = require("path");

console.log(path.sep);

console.log(path.join('/content','/subfolder','/test.txt'));
console.log(path.basename(path.join('/content','/subfolder','/test.txt')));

console.log(path.resolve(__dirname,'content','subfolder',"test.txt"));