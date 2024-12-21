const fs = require("fs");

//callbacks, promises

//async file writing
const content = "This is an example file";
// fs.writeFile('example.txt',content,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('File successfully created');

//     }
// });

//sync file writing

// try {
//   fs.writeFileSync("example.txt", content);
//   console.log("File successfully created");
// } catch (error) {
//   console.error("Error creating file", error);
// }


// fs.readFile("example.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

fs.unlink("example.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully deleted");
  }
});

// fs.mkdir("tutorial", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Directory successfully created");
//   }
// })

//servers
//file system
//streams => chunks of data for large files or real time data
    //readable streams allow you to read data in chunks
    //writable streams allow you to write data in chunks
    //transform streams allow you to transform data in chunks (compression)
    //pipe => read from a readable stream and write to a writable stream
//events -> event emitter which allows to emit and listen for events
