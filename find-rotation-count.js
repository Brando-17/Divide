function findRotationCount(arr) {
    let left = 0
    let right = arr.length -1

    if(arr[left] <= arr[right]){
        return 0
    }
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] > arr[mid]){
            return mid +1
        }
        if(arr[mid - 1] > arr[mid]){
            return mid
        }
        if(arr[mid] >= arr[left]){
            left = mid -1
        }
        else{
            right = mid -1
        }
    }
    return 0
}

module.exports = findRotationCount