//run.js
const { exec } = require('child_process')
exec('hexo s',(error, stdout, stderr) => {
    if(error){
         console.log(`exec error: ${error}`)
         return
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})