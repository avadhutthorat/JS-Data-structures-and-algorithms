function sumZeroMultiplePointers(arr){
	if(arr.length === 0 ) return false;
  let left = 0;
  let right = arr.length - 1;
  let sum=0;
  while(left < right){
  	sum = arr[right] + arr[left];
  	if(sum === 0 ) {
    		return [arr[left], arr[right]]
    } else if(sum > 0) {
    	right--;
    } else {
    left++;
    }
  }
  return false;
}
console.log(sumZeroMultiplePointers([-3,-1,0,1,4]));

// time complexity - O(n)
// space complexity - O(1)
