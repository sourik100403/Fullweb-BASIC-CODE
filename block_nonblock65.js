const fs=require('fs');
fs.readFile("message.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("this is message into the code");