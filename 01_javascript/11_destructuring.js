//object destructuring
//array destructuring
let person = {firstName: 'Alpha',
    lastName: 'Bravo',
    address: '34 elm st',
    qualifications:{
        bachelors: '7.51',
        masters: '3.8'
    }
};
const {address, firstName, qualifications} = person;

console.log(qualifications)