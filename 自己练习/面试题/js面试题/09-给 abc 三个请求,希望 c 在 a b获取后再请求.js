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
// 读取a.text文件的内容，并将回调函数作为参数传递给fs.readFile
fs.readFile('./a.text', 'utf-8', (err,data) => {
    // 调用上面定义的fn函数，并传递读取到的文件内容data作为参数
    fn(data)
})
// 读取b.text文件的内容，并将回调函数作为参数传递给fs.readFile
fs.readFile('./b.text', 'utf-8', (err,data) => {
    // 调用上面定义的fn函数，并传递读取到的文件内容data作为参数
    fn(data)
})
