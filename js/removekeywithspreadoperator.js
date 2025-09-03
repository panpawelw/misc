const removeKey = (key, obj) => {
    const {[key]: omitted, ...res} = obj;
    return res;
};

console.log(removeKey("bar", {foo: 1, bar: 2}));

// There are different ways to remove a property from an object:
// (1) Using the delete keyword → This mutates the original object. It’s fine when you’re certain the object is safe to modify,
// and it avoids extra memory allocation.
// (2) Using the spread operator (...) → You create a new object without the unwanted key.
// This avoids mutation and can make your code safer in scenarios where the original object must stay intact.
// Both approaches have pros and cons. Mutation can be more efficient, but immutability reduces the risk of side effects.
// The right choice depends on your use case.