let sum=0
let tab=process.argv
for (let i=2 ;i<tab.length;i++){
    sum+=Number(tab[i])
}
console.log(sum)