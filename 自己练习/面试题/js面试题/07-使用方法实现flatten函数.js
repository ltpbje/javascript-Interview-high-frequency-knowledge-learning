// 使用方法实现flatten函数

let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

/**
 * 使用递归算法将多维数组展平为一维数组
 * @param {Array} arr 要展平的数组
 * @returns {Array} 展平后的数组
 */
const flatten = function (arr) {
    // while (arr.some(v => Array.isArray(v))) {
    //     arr = [].concat(...arr)
    // }
    // return arr

    return [].concat(...arr.map(v => (Array.isArray(v)) ? flatten(v) : v))
}

console.log(flatten(arr))