// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0

function result(input) {
  // Your Code Here
  for(let i  in input){
      sum += input[i]
  }
 return sum 
}
console.log(result(input));
