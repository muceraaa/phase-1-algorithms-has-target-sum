function hasTargetSum(array, target) {
  // Write your algorithm here
   for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
       if (array[j] === complement) return true;
     }
    }
  
    return false;
 }


/* 
  Write the Big O time complexity of your function here

  Runtime: O(n^2)
*/

/* 
  Add your pseudocode here

  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }
*/

/*
  Add written explanation of your solution here

  make an object to keep track of the numbers we've already seen
    for the current number, identify a complement that adds to the target (comp = target - num)
    check if any key on our object is the complement
      if so, return true
      otherwise, add that number to the object
    and on reaching the end of the array, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
