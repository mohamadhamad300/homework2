var express = require('express');
var app = express();
var os = require('os');

function readcomputerinformation(){
    let currentOS = {
        name: os.type(),
        architecture: os.arch(),
        platform: os.platform(),
        release: os.release(),
        version: os.version(),
        hostname:os.hostname(),
        totalmemory:os.totalmem(),
        operatingdystem:os.type(),
        osversion:os.version()
    };
   /* return {
        "hostname":os.hostname,
        "windows":os.platform(),
       /// "network":os.networkInterfaces().eth0.addreess,

    }*/
    return currentOS;
}
app.get('/', function (req, res) {
    var obj=readcomputerinformation();
res.send("computer name  :"+obj.hostname+"\n"+" <br \>  "+"total memory:"+obj.totalmemory+"\n"+"<br/>operating system:"+obj.operatingdystem+"\n"+"<br />version"+obj.platform+"\n");
});
app.listen(5000);