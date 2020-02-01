function freq(num1,num2){
	let num1arr = num1.toString().split('')
  let num2arr = num2.toString().split('')
  let num1lookup = {}, num2lookup = {};
   for(let val of num1arr){
   		num1lookup[val] = (num1lookup[val] || 0) + 1;
   }
   for(let val of num2arr){
   		num2lookup[val] = (num2lookup[val] || 0) + 1;
   }
 for(let key in num1lookup){
 		if(!(key in num2lookup)) {
    	return false;
    }
    if(num1lookup[key] !== num2lookup[key]) return false;
 	}
  return true
  }

console.log(freq(222,222))
// time complexity - O(n)
