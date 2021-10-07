// difference([2, 1], [2, 3]);
// => [1]

function difference(arr1, arr2) {
    const result = [];

    for (const item of arr1) {        
        if (!arr2.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

console.log(difference([2, 1], [2, 3]));