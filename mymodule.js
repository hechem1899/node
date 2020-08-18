const fs=require('fs')
module.exports=mymodule=(dir,ext,cb)=>{
fs.readdir(dir,(er,data)=>{
    if(er){
        cb(er)
    }else{
        cb(null,data.filter(el=>el.endsWith(`.${ext}`)))
    }
})


}