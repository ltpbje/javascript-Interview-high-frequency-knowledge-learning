// 给abc三个请求，希望c在ab获取后再请求
const fs = require("fs")


// 1.promise.all
let arr = []
function fn(data) {
    arr.push(data)
    if (arr.length === 2) {
        console.log(arr)
    }
}


fs.readFile('./a.text', 'utf-8', (err,data) => {
    fn(data)
})

fs.readFile('./b.text', 'utf-8', (err,data) => {
    fn(data)
})