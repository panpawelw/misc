const id = Symbol("id");

const pet = {
    type: "kitty",
    [id]: 101
}

// another dev adds an "id" property later:
pet.id = "U-101";

console.log(pet.type); // kitty
console.log(pet.id);   // U-101 (string)
console.log(pet[id]); // 101 (unique Symbol value)

// the two "id" properties do not conflict