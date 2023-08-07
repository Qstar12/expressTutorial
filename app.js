const { readFile, writeFile } = require("fs");
//Module Wrapper Function using util.promisify
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);





const content = async () => {
    try {
        const first = await readFilePromise("./content/first.txt", "utf8");
        const second = await readFilePromise("./content/second.txt", "utf8");
        await writeFilePromise('./content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`);
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};
content();

//WRAPPING FUNCTION TO SET UP PROMISES
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.log(err));
