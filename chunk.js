// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

function chunk(arr, sizeOfChunk) {
    const chunks = [];

    while (arr.length > 0) {
        let chunk = [];

        for (let i = 0; i < sizeOfChunk; i++) {
            const elem = arr.shift();

            if (elem !== undefined) {
                chunk.push(elem);
            } else {
                break;
            }
        }
        chunks.push(chunk);
    }
    return chunks;
}

export { chunk };