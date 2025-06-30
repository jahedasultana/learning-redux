//* pure function

// const add = (a, b) => a + b;

// console.log(add(2, 5));


//* Impure function 

// let total = 0;

// const addToTotal = (amount) => (total = total + amount);

// console.log(addToTotal(4));



// const rendomNumber = (amount) =>{
//     return amount + Math.random();
// };

// console.log(rendomNumber(3));
// console.log(rendomNumber(3));
// console.log(rendomNumber(3));
// console.log(rendomNumber(3));





// const employee = {
//     name: "Mir",
//     address: {country: "Bangladesh", city: "Dhaka"},
// };

// const employee2 = {
//     ...employee,
//     name: "Mezba",
//     address: {...employee.address, city: "Chittagong"},

// };
// console.log(employee == employee2);
// console.log(employee);
// console.log(employee2);




import {produce} from "immer";
const employee = {
    name: "Mir",
    address: {country: "Bangladesh", city: "Dhaka"},
};

const employee2 = produce(employee, (draft) =>{
    
    draft.name = "Mezba";
    draft.address.city = "Chittagong";
}) ;
console.log(employee == employee2);
console.log(employee);
console.log(employee2);