const { writeFile } = require("fs");

const fs = require("fs").promises;
const dirr = "/home/saikrishna/Documents/fs/";
function readingFile(fileName) {
  return fs.readFile(`${dirr}${fileName}`, "utf-8");
}
function writingFile(fileName, data) {
  return fs.writeFile(`${dirr}${fileName}`, data);
}
function appendingFile(fileName, dataAdding) {
  return fs.appendFile(`${dirr}${fileName}`, dataAdding);
}
function deletingFile(fileName) {
  return fs.unlink(`${dirr}${fileName}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted the file " + fileName);
    }
  });
}
function fsPromiseProblem2() {
  readingFile("lipsum.txt")
    .then((data) => {
      console.log("reading lipsum");
      return writingFile("upper.txt", data.toUpperCase());
    })
    .then((data1) => {
      console.log("writing it in upper file in uppercase");
      return writingFile("filenames.txt", "upper.txt");
    })
    .then((data2) => {
      console.log("adding the name of the file in filanames");
      return readingFile("upper.txt");
    })
    .then((data3) => {
      console.log("reading the contents of the uppercase file");
      return writingFile(
        "newline.txt",
        data3.toLowerCase().replaceAll(". ", ".\n")
      );
    })
    .then((data4) => {
      console.log("newline file created");
      return appendingFile("filenames.txt", "\nnewline.txt");
    })
    .then((data5) => {
      console.log("added newline.txt into the filenames.txt");
      return readingFile("upper.txt");
    })
    .then((data6) => {
      console.log("reading the contents of upper");
      return writingFile("sort.txt", data6);
    })
    .then((data7) => {
      console.log("adding the contents of the upper to sort");
      return readingFile("newline.txt");
    })
    .then((data8) => {
      console.log("reading the contents of file newline");
      return appendingFile("sort.txt", data8);
    })
    .then((data9) => {
      console.log("adding the contens of newline file to the sort file");
      return readingFile("sort.txt");
    })
    .then((data10) => {
      console.log("reading the content of the sort file");
      return writingFile("sort.txt", data10.split("").sort().join(""));
    })
    .then((data11) => {
      console.log("sorted the contents of file");
      return appendingFile("filenames.txt", "\nsort.txt");
    })
    .then((data12) => {
      console.log("added sort file name filetext");
      return readingFile("filenames.txt");
    })
    .then((data13) => {
      console.log("reading the filenames of the file");
      //console.log(data13);
      let names = data13.split("\n");
      deletingFile(names[0]);
      deletingFile(names[1]);
      deletingFile(names[2]);
    });
}
module.exports = fsPromiseProblem2;
