// unshift
let arr = [1, 2, 3]
// arr.myUnshift(3, 4, 5) // 3,4,5,1,2,3

Array.prototype.myUnshift = function () {
    // 获取传入函数的参数数量
    const len = arguments.length;
    
    // 遍历参数，从最后一个开始向前遍历
    for (let i = len - 1; i >= 0; i--){
        // 获取当前遍历到的参数
        const element = arguments[i];
        
        // 使用 splice 方法在数组开头插入元素
        this.splice(0, 0, element);
    }
    
    // 返回数组新的长度
    return this.length;
}

// 调用 arr 的 myUnshift 方法，传入参数为 3,2,1
console.log(arr.myUnshift(3,2,1), arr)
