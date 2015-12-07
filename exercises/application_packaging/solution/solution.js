const parentFile = process.env.parent_filename;
const fs = require('fs');
const keywords = ['asar'];

const result = keywords.filter((keyword) => parentFile.indexOf(keyword) !== -1);

if (result.length === keywords.length) {
  console.log("Congrats!!!");
} else {
  console.error("Your file does not have keywords");
}

