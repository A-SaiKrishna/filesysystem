const fs = require("fs");
let dirr = "";
function creatingFile(currentFile, limit) {
  return new Promise((resolv, reject) => {
    if (currentFile <= limit) {
      let obj = { file: currentFile };
      fs.writeFile(
        `${dirr}/file${currentFile}.json`,
        JSON.stringify(obj),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolv("SUCCESS");
          }
        }
      );
    }
  });
}

function deletingFile(filenum) {
  return new Promise((res, rej) => {
    fs.unlink(`${dirr}/file${filenum}.json`, (err) => {
      if (err) {
        rej("UNSUCCESS");
      } else {
        res("SUCCESS");
      }
    });
  });
}

function fsPromisProblem1(dir, limit) {
  dirr = dir;
  creatingFile(1, limit)
    .then(function (data1) {
      console.log("successfully created the file1");
      return deletingFile(1);
    })
    .then(function (data2) {
      console.log("deleted the file-1");
      return creatingFile(2, limit);
    })
    .then(function (data3) {
      console.log("creating the file2");
      return deletingFile(2);
    })
    .then(function (data4) {
      console.log("deleted the file-2");
      return creatingFile(3, limit);
    })
    .then(function (data5) {
      console.log("created the file-3");
      return deletingFile(3);
    })
    .then(function (data6) {
      console.log("deleted the file-3");
    });
}
module.exports = fsPromisProblem1;
