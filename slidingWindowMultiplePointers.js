function subArraySlidingWindow(arr,num){
let tempSum = 0, maxSum=0;
	if(arr.length < num) return null;
	for(let i=0 ; i< num; i++){
		tempSum += arr[i]
	}
	maxSum= tempSum;
  for(let i=num; i< arr.length; i++){
  	tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum
}

// More efficient way for sliding window solution
function subArraySlidingWindow(arr,num){
let tempSum = 0, maxSum=0;
    if(arr.length < num) return null;
    for(let i=0 ; i< num; i++){
        tempSum += arr[i]
    }
    maxSum= tempSum;
  for(let i=num; i< arr.length; i++){
      tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum
}

console.log(subArraySlidingWindow([2,6,9,2,1,8,5,6,13],4))
