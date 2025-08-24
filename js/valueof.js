const d1 = new Date();
const d2 = new Date("2024-01-10");
console.log(d1, ', ', d2, ', difference in miliseconds:', d2 - d1);
console.log();

const obj1 = {
    value: 10,
    valueOf() {
        return this.value;
    }
};

const obj2 = {
    value: 20,
    valueOf() {
        return this.value;
    }
};

console.log(obj2 - obj1);
console.log(obj2 + obj1);
console.log(obj2 * obj1);
console.log(obj2 / obj1);

// Whenever you try to use an object in arithmetic, JavaScript runs an internal process called toPrimitive.
// This process checks in order:
// 1. If the object has [Symbol.toPrimitive], it uses that.
// 2. Otherwise it calls .valueOf().
// 2. If that doesn't give a primitive, it falls bak to .toString() that returns a primitive.
// By defining valueOf() to return a primitive value (or [Symbol.toPrimitive]), you can control how your object behaves in arithmetic operations.