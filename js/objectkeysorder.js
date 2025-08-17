const obj = {
    'b': 1,
    '2': 2,
    'a': 3,
    '1': 4,
    'c': 5
};

console.log(Object.keys(obj));

// Object.keys() returns string keys in a specific order that depends on the key type, not insertion order.
// JavaScript engines return object keys in a specific order: numeric keys first (sorted numerically), then string keys in insertion order.
// This happens even though you defined them in a different sequence.
// This applies specifically to non-negative integers (0, 1, 2, etc.), not all numbers.
// Negative numbers like -1 follow insertion order along with other properties. 