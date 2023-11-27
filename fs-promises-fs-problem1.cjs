const fs = require("fs").promises;
let dirr = "";
function creatingFile(currentfile, limit) {
  if (currentfile <= limit) {
    let obj = { file: currentfile };
    return fs.writeFile(
      `${dirr}/file${currentfile}.json`,
      JSON.stringify(obj),
      (err) => {
        if (err) {
          console.log("error");
        } else {
          console.log("created the file" + currentfile);
        }
      }
    );
  }
}
function deletingFile(currentfile) {
  return fs.unlink(`${dirr}/file${currentfile}.json`, (err) => {
    if (err) console.log(err);
  });
}

function recursiveCall(currFile, limit) {
  creatingFile(currFile, limit)
    .then(function (data) {
      console.log("created file" + currFile);
      return deletingFile(currFile);
    })
    .then(function () {
      console.log("deleted file" + currFile);
      return recursiveCall(currFile + 1, limit);
    });
}
function fsPromisProblem1(dir, limit) {
  dirr = dir;
  // creatingFile(1, limit)
  //   .then(function (data1) {
  //     console.log("successfully created the file1");
  //     return deletingFile(1);
  //   })
  //   .then(function (data2) {
  //     console.log("deleted the file-1");
  //     return creatingFile(2, limit);
  //   })
  //   .then(function (data3) {
  //     console.log("creating the file2");
  //     return deletingFile(2);
  //   })
  //   .then(function (data4) {
  //     console.log("deleted the file-2");
  //     return creatingFile(3, limit);
  //   })
  //   .then(function (data5) {
  //     console.log("created the file-3");
  //     return deletingFile(3);
  //   })
  //   .then(function (data6) {
  //     console.log("deleted the file-3");
  //   });
  recursiveCall(1, limit);
}
module.exports = fsPromisProblem1;
