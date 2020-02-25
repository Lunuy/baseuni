
const fs = require("fs");
const baseuni = require("../dist/index");

//ENCODE, DECODE Image file buffer
{
    const file = fs.readFileSync("./image.jpg");
    const encoded = baseuni.encode(Array.from(file));
    fs.writeFileSync("./encoded.txt", encoded);
    console.log("-- ENCODED --");
    console.log(encoded);
    
    const decoded = Buffer.from(baseuni.decode(fs.readFileSync("./encoded.txt").toString()));
    fs.writeFileSync("./decoded.jpg", decoded);
    console.log("-- DECODED --");
    console.log(decoded);
}