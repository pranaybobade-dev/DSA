let n1 = [1, 2, 3];
let n2 = [2, 4, 5];

function mergeSortedArray(n1, m, n2, n) {
  let p1 = n - 1;
  let p2 = n - 1;
  for (let i = m + n; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && n1[p1] > n2[p2]) {
      n1[i] = n1[p1];
      p1--;
    } else {
      n1[i] = n2[p2];
      p2--;
    }
  }
}

mergeSortedArray(n1, 2, n2, 3);
console.log(n1);
