// 对数组进行随机排序

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr) {
    // 遍历数组中的每个元素
    for (let i = 0; i < arr.length; i++) {
        // 生成一个随机索引
        let randomIndex = parseInt(Math.random() * arr.length);
        // 存储当前索引位置的元素
        let curNum = arr[i];
        // 将当前索引位置的元素与随机索引位置的元素交换
        arr[i] = arr[randomIndex];
        arr[randomIndex] = curNum;
    }

    return arr;
}


// 测试 result 函数
// console.log(result(arr));

// 使用 sort 方法结合回调函数进行随机排序
arr.sort(() => Math.random() - 0.5);
console.log(arr);
