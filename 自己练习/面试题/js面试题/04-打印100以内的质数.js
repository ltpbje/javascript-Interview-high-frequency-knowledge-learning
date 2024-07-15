// 打印100以内的质数

// 质数：只能被1和自身整除

let count = 0

for (let i = 2; i <= 100; i++){
    for (let j = 1; j <= i; j++){
        if (i % j === 0) {
            count++
        }
    }
    // 从1开始，到自身都被%完，1自身整除count===2
    if (count === 2) {
        console.log(i)
    }
    count = 0
}