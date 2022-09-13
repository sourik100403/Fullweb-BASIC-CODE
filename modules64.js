const fs =require('fs');
let text = fs.readFileSync("tut64.txt", "utf-8");
text = text.replace("text", "nontext");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("tut64_a.txt", text);


