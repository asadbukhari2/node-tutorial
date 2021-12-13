const  {readFile,writeFile}= require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () =>{
    const first = await readFilePromise("./content/subfolder/first.txt","utf-8")
    const second = await readFilePromise("./content/subfolder/second.txt","utf-8")
    await writeFilePromise
    ("./content/subfolder/result-from12file.txt",
    `this is Awesome code ${first} ${second}`,"utf-8"
    )
    console.log(first);
    console.log(second);
}


// const getText=(path)=>{
//         readFile(path,"utf-8",(err,data)=>{
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data)}
//         })
// };

// getText("./content/subfolder/first.txt")
//     .then(result => console.log(result))
//     .catch(err=>console.log(err));
// getText("./content/subfolder/second.txt")
//     .then(result => console.log(result))
//     .catch(err=>console.log(err));

// const start = async () =>{
// const first = await getText("./content/subfolder/first.txt")
// const second = await getText("./content/subfolder/second.txt")
// console.log(first);
// console.log(second);
// }

start()