/**
 * node的cmd
 */

const cmd = require('node-cmd');

function runCmdTest(cmd) {

    nodeCmd.get(
        cmd,
        function (err, data, stderr) {
            console.log(data);
        }

    );
}