// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let arrOdd=[]
  let arrEvent=[]
    for( let i in arr1 ){
        if(arr1[i]%2 == 1){
          arrOdd.push(arr1[i])
        }
    }
    for( let i in arr2 ){
      if(arr2[i]%2 == 1){
        arrOdd.push(arr2[i])
      }
  }
  for( let i in arr1){
    if(arr1[i]%2 == 0){
      arrEvent.push(arr1[i])
    }
}
  for( let i in arr2 ){
    if(arr2[i]%2 == 0){
    arrEvent.push(arr2[i])
  }
}

return arrCombination =[...new Set([...arrOdd,...arr1,...arrEvent])]
}
console.log(result(arr1, arr2));