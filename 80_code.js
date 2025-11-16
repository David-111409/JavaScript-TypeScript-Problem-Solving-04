var majorityElement = function (nums) {
    let cand = null;
    let count = 0;
    for (let ele of nums){
        if (count === 0){
            cand = ele;
        }
        count += (cand === ele) ? 1 : -1;
    }
    return cand;
};
console.log(majorityElement([2, 3, 2, 2]));
