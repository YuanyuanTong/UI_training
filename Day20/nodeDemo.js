// 1. Delete a non empty folder in NodeJS

const http = require('http');
const fs = require('fs');
const path = require('path');

const removeDir = function(folderPath) {
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath)

    if (files.length > 0) {
      files.forEach(function(filename) {
        const currPath = path.join(folderPath, filename);
        if (fs.statSync(currPath).isDirectory()) {
          removeDir(currPath);
        } else {
          fs.unlinkSync(currPath);
        }
      })
      fs.rmdirSync(folderPath);
    } else {
      fs.rmdirSync(folderPath);
    }
  } else {
    console.log("Directory path not found.")
  }
}

const folderToRm = path.join(__dirname, "a")

removeDir(folderToRm)

// 2. Read text file data and send it to the client
// 3. Read image file and send it to the client
var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

// Type: http://localhost:8080/panda.jpg to show the image file
// Type: http://localhost:8080/text.txt to show the text file

var staticServe = function(req, res) {
    var folderPath = path.join(__dirname, "files");
    var safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    var fileLoc = path.join(folderPath, safeSuffix);
    console.log(fileLoc);

    let type = mime[path.extname(safeSuffix).slice(1)] || 'text/plain';
    
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }
        res.writeHead(200, {'Content-Type': type});
        res.write(data);
        return res.end();
    });
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8080);