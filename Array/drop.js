// drop([1, 2, 3]);
// => [2, 3]
 
// drop([1, 2, 3], 2);
// => [3]
 
// drop([1, 2, 3], 5);
// => []
 
// drop([1, 2, 3], 0);
// => [1, 2, 3]

const drop = (arr, n = 1) => arr.slice(n);
