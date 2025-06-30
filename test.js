//* pure function

const add = (a, b) => a + b;

console.log(add(2, 5));


//* Impure function 

let total = 0;

const addToTotal = (amount) => (total = total + amount);

console.log(addToTotal(4));

const rendomNumber = (amount) =>{
    return amount + Math.random();
};

console.log(rendomNumber(3));
console.log(rendomNumber(3));
console.log(rendomNumber(3));
console.log(rendomNumber(3));
