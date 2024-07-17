// 两数之和

// nums target
// nums = [2, 7, 11, 15] target = 9

const nums = [3, 6, 11, 15]
const target = 9

function twoNum(nums, target) {
    for (let i = 0; i < nums.length; i++){
        const num = nums[i]
        const targetIndex = nums.indexOf(target - num)
        
        // 如果找到符合条件的索引值，结束循环
        if (targetIndex > -1 && targetIndex!== i) {
            return [i,targetIndex]
        }
    }
}

console.log(twoNum(nums,target));