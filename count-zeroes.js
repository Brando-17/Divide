function countZeroes(arr) {
    let left = 0;
    let right = arr.length -1;

    if(right <0){
        return 0
    }
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === 0){
            right = mid -1
        }
        else {
            left = mid + 1 
        }
    }
    if(left < arr.length && arr[left] === 0){
        return arr.length - left;
    }
    else{
        return 0
    }
  
}

module.exports = countZeroes