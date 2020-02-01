// Using frequency counter pattern
 function areThereDuplicates(){
let lookup = {};
[...arguments].map(num => {
  lookup[num] = (lookup[num] || 0 )+ 1
  })
for(let key in lookup){
if(lookup[key] > 1){
return true
}
}
return false
} 

function areThereDuplicates(){
	return new Set(arguments).size !== arguments.length 
} 

console.log(areThereDuplicates('a','b','c', 'b'))
