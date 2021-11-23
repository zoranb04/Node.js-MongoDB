const fs = require("fs/promises");
const path = require("path");

const PathToFile = path.join(__dirname, ".gitignore");
const pathToWrittenFile = path.join(__dirname, "newFile.txt");
const fileReader = async () => {
    const data = await fs.readFile(PathToFile);
    console.log(data.toString());
}

const fileWriter = async (contentToBeWritten) => {
await fs.writeFile(pathToWrittenFile, contentToBeWritten);
}

module.exports = {
    fileReader,
    fileWriter,
  };