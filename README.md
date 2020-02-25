Baseuni
---------
# Baseuni
Baseuni can encode buffer to unicode string.
It works like baseXX encoding, it is base1048576(16**5).
Baseuni uses unicode characters to encode buffer.

# Example
```js
const fs = require("fs");
const baseuni = require("baseuni");

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
```