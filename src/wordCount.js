const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(__dirname, '../data.txt');

async function countWords() {
  try {
    const textContent = await fs.readFile(filePath, { encoding: 'utf8' });
    const words = textContent.split(" ");
    return words.length;
  } catch (err) {
    console.log(err);
  }
}

countWords()
  .then(wordCount => {
    console.log("word count...", wordCount);
  })
  .catch(err => {
    console.error("Error:", err);
  });
