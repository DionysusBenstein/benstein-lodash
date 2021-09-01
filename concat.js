function concat(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);        
    }

    return arr1;
}

export { concat };