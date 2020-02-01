function averagePair(arr, target){
  if(arr.length === 0 ) return false
  let i=0;
  let j= arr.length -1;
  while(i<j){
  	let avg = (arr[i] + arr[j]) / 2
    console.log(avg)
  	if(avg < target){
    		i++;
    } else if(avg > target){
    		j--
    } else if(avg === target){
    	return true
    }
  }
  return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],5.5))

// time - O(n)
// space - O(1)
