var fs = require("fs");

//readFile();
//readFileSync();
//writeFile();
writeFilSynce();

function readFile() {
    fs.readFile('score.txt', function (err, doc) {
        if (err === null) {
            console.log("readFile");
            console.log(doc.toString());
        }
    });
}

function readFileSync() {
    var doc = fs.readFileSync('score.txt');
    console.log("readFileSync");
    console.log(doc.toString());
}

function writeFile() {

    fs.readFile('score.txt', function (err, doc) {
        if (err === null) {

            fs.writeFile('score_new.txt', doc.toString(), function (err) {
                console.log("writeFile");
            });
        }
    });
}

function writeFilSynce() {

    var doc = fs.readFileSync('score.txt');
    fs.writeFileSync('score_new.txt', doc.toString());
    console.log("writeFilSynce");
}