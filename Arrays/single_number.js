let arr = [1, 3, 3, 4, 4, 5, 6, 6, 5];

function singleNumber(arr) {
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap[arr[i]]) {
      hashMap[arr[i]] = 1;
    } else {
      hashMap[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]] === 1) {
      return hashMap[arr[i]];
    }
  }
}

console.log(singleNumber(arr));

// better approch
function singleNumberBetterApproach(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

console.log(singleNumberBetterApproach(arr));
