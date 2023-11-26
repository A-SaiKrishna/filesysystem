const fs = require("fs");
let dir = "";
let path = require("path");

function creatingDir(dirr, cb) {
  fs.mkdir(dirr, (err) => {
    if (err) console.log("directory cannot be created");
    else {
      console.log("directory is created");
      cb();
    }
  });
}

function creatingFile(fileNumber, limit, cb) {
  if (fileNumber <= limit) {
    let path1 = `${dir}/file${fileNumber}.json`;

    fs.writeFile(
      `${dir}/file${fileNumber}.json`,
      JSON.stringify(fileNumber),
      (err) => {
        if (err) console.log(err);
        else {
          console.log("created the file " + fileNumber);
          cb();
        }
      }
    );
  }
}

function deletingFile(fileNumber, cb) {
  let path = `${dir}/file${fileNumber}.json`;
  fs.unlink(path, (err) => {
    if (err) {
      console.log(fileNumber + " cannot be deleted");
    } else {
      console.log("deleted the file " + fileNumber);
      cb();
    }
  });
}

function callback(dirr, numOfFiles) {
  dir = dirr;
  creatingDir(dirr, function () {
    creatingFile(1, 3, function () {
      deletingFile(1, function () {
        creatingFile(2, 3, function () {
          deletingFile(2, function () {
            creatingFile(3, 3, function () {
              deletingFile(3, function () {
                console.log("successfully completed using call backs");
              });
            });
          });
        });
      });
    });
  });
}
module.exports = callback;
