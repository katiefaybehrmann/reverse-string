function reverseString(str) {
  let arr = str.split('')
  let newStr;
  for (let i = arr.length; i > 0; i--){
    newStr = newStr + arr[i]
  }

  return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
