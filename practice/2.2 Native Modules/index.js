const fs = require("fs");

/* fs.writeFile("message2.txt", "testing !!!!", (err) => {
	if (err) throw err;
	console.log("file created@!@");
}); */

fs.readFile("./message2.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});