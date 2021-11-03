// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
 
// differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]

function differenceBy(arr, iter, criterion) {
    let result = [];

    if (typeof criterion === 'function') {
        for (const item of arr) {
            if (!iter.includes(criterion(item))) {
                result.push(item);
            }
        }
    }

    return result;
}

console.log(typeof differenceBy);
console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));