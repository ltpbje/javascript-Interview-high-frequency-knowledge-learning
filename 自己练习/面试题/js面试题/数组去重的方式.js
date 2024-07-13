// 创建一个数组 arr，包含不同类型的元素
var arr = [
    {},
    {},
    '',
    '',
    233,
    233,
    '233',
    'abc',
    undefined,
    null,
    null,
    NaN,
    NaN,
    123,
    [2],
    [2],
    [2,3]
];

// 在 Array.prototype 上添加 myUnique 方法
Array.prototype.myUnique = function () {
    // // 使用 Set 数据结构去重
    // return Array.from(new Set(this));

    // let arr = []
    // for (let i = 0; i < this.length; i++){
    //     if (!arr.includes(this[i])) {
    //         arr.push(this[i])
    //     }
    // }
    // return arr

    
    // 使用 indexOf 方法实现去重
    return this.filter((v, index) => {
        return this.indexOf(v,0) === index
    })
}

console.log(arr.myUnique());