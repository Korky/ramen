var exec = require("./lib/utils.js");

var cmd = "node release/workers/dummyWorker.js";


exec(cmd, function(error, stdout, stderr) {
 
    if(error)console.log(stderr);
    console.log(stdout);
});