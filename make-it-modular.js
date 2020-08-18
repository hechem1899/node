const mymodule=require('./mymodule')
let dir=process.argv[2]
let ext=process.argv[3]
mymodule(dir,ext,(er,data)=>{
    if(er){
        console.log(er)
    }else{
        data.map(el=>console.log(el))
    }
})