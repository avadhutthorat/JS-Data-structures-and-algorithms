function countUniqueValues(arr){
	if(arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while(j < arr.length){
  	if(arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
          j++
    } else {
    		j++
    }
  }
  return i+1;
}

console.log(countUniqueValues([1,2,3,4,7,7,13,14,14, 15])) // 8
console.log(countUniqueValues([])) // 0

// time complexity - O(n)
