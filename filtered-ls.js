const fs=require('fs')
let dir=process.argv[2]
let ext=process.argv[3]
fs.readdir(dir,(er,files)=>{
    if(er){
        console.log(er)
    }else{
        files.filter(el=>el.endsWith(`.${ext}`)).map(el=>console.log(el))
    }
})