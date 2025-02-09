function findFloor(arr,num) {
  function firstOccurance(arr, num){
    let left = 0
    let right = arr.length - 1
    let result = -1
  
  while (left <= right){
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === num){
        result = mid
        right = mid -1
    }
    else if (arr[mid] < num){
        left = mid + 1
    }
    else{
        right = mid - 1
    }
  }
  return result
}
    function lastOccurance(arr,num){
        let left = 0
        let right = arr.length -1
        let result = -1

        while(left <= right){
            let mid = Math.floor((left + right) / 2 )
            if(arr[mid] === num){
                result = mid
                left = mid + 1
            }
            else if(arr[mid] < num){
                left = mid + 1 
            }
            else{
                right = mid -1
            }
        }
        return result
    }
    let first = firstOccurance(arr,num)
    if(first === -1){
        return 0
    }
    let last = lastOccurance(arr,num)
    
    return last - first + 1
    
}

module.exports = findFloor