// compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

const compact = arr => arr.filter(item => item);

export { compact };