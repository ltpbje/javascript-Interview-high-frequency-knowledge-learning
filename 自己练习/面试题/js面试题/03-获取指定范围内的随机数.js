// 获取指定范围内的随机数
function fn(min, max) {
    // (min,max)
    // return Math.round(Math.random() * (max - min - 2) + min + 1)
    
    // [min,max]
    // return Math.round(Math.random() * (max - min) + min)
    
    // (min,max]
    // return  Math.ceil(Math.random() * (max - min) + min)

    // [min,max)
    return  Math.floor(Math.random() * (max - min) + min)

}