let arr1 = [1,2,3];
//spread operator is denoted by 3 dots '...'
let arr2 = [...arr1]; //copies array1 in array2
arr2.push(4);
console.log(arr1);
console.log(arr2);


let obj1 = {firstName: 'Alpha',
    lastName: 'Bravo'};
let obj2 = {...obj1, address1: ''}; //returns a new object
obj2['address2'] = '';
obj2['firstName'] = 'Delta';

console.log(obj1);
console.log(obj2);

//value from last obj will be shown in obj3 for same keys
let obj3 = {...obj2,...obj1};

console.log(obj3);

