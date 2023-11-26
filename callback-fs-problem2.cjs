const fs = require("fs");
let dirr = "/home/saikrishna/Documents/fs/";

function readingFile(fileName, callbac) {
  fs.readFile(`${dirr}/${fileName}`, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callbac(data);
    }
  });
}
function appendingFile(fileName, addingParam, callbac) {
  fs.appendFile(`${dirr}/${fileName}`, addingParam, (err) => {
    if (err) {
      console.log(err);
    } else {
      callbac();
    }
  });
}
function writingFile(fileName, data, callbac) {
  fs.writeFile(`${dirr}/${fileName}`, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      callbac();
    }
  });
}
function deletingFile(fileName) {
  fs.unlink(`${dirr}/${fileName}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted the " + fileName);
    }
  });
}
function callbackproblem2() {
  let filess = "";
  readingFile("lipsum.txt", function (data) {
    console.log("reading the lipsum ");
    data = data.toUpperCase();
    writingFile("upper.txt", data, function () {
      console.log("converting data to upper case");
      writingFile("filenames.txt", "upper.txt", function () {
        console.log("creating the filenames txt and placing upper txt name");
        readingFile("upper.txt", (data1) => {
          console.log("reading the content of upper case file");
          data1 = data1.toLowerCase().replaceAll(". ", ".\n");
          writingFile("newline.txt", data1, function () {
            console.log("writing the content to the new file");
            appendingFile("filenames.txt", "\nnewline.txt", () => {
              console.log("adding name of file to the filenames.txt");
              readingFile("upper.txt", (data2) => {
                console.log("reading the upper  file");
                data2 = data2.split("").sort().join("");
                writingFile("sort.txt", data2, function () {
                  console.log(
                    "sorting the content of the file upper and adding to sort file"
                  );
                  readingFile("newline.txt", (data3) => {
                    console.log("reading newline file");
                    data3 = data3.split("").sort().join("");
                    appendingFile("sort.txt", data3, function () {
                      console.log("adding the new line txt to sort txt");
                      appendingFile("filenames.txt", "\nsort.txt", function () {
                        console.log(
                          "adding the name of the file to the filenames"
                        );
                        readingFile("filenames.txt", function (data4) {
                          console.log(
                            "reading the names of created files in the filenames.txt"
                          );
                          filess = data4.split("\n");
                          deletingFile(filess[0]);
                          deletingFile(filess[1]);
                          deletingFile(filess[2]);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}
module.exports = callbackproblem2;
