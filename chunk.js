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