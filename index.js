const path = require('path');
const fs = require('fs');
const dir_path = path.join(__dirname, 'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dir_path}/index${i}.txt`, 'Hello');
// }
fs.readdir(dir_path, (err, files)=>{
    files.forEach(element => {
        fs.readFile(`${dir_path}/${element}`,'utf8',(err, data)=>{
            console.log(data);
        })
    });
})