// let arr = ['Mike','Nicola','Tom'];
// console.log(arr[1])
// console.log(arr.splice(1, 1, 'Alex'))
// console.log(arr.splice(1, 2))
// console.log(arr)
// console.log(arr.length);


//---------------------------------------


// let a = [5, 3, -4, 25, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];

// let resultA = a.reduce(function(sum, elem){return sum + elem}, 0);
// let resultB = b.reduce(function(sum, elem){return sum + elem}, 0);

// function sum(resultA,resultB){
//     if (+resultA > +resultB){  
//         return 'a > b';     
//     } else if (+resultA < +resultB) { 
//         return 'a < b'; 
//     } else if (+resultA == +resultB) {
//         return 'a = b'
//     };
// }
// console.log(sum(resultA,resultB))


//-------------------------------------------


// let phrase = 'I am learning JavaScript right now';
// console.log(phrase.split(' '));


//--------------------------------------------


// let a = [5, 3, 8, 5, 3, 2, 1, 2];
// let b =  [];

// const uniqArray = a.filter((item,index) => {
//     return index === a.indexOf(item);
// })

// uniqArray.forEach((item) => {
    
//     b.push(item)
// })

// console.log(b)


//---------------------------------------------


let users = [{id: 1, age: 17},
            {id: 2, age: 18},
            {id: 3, age: 19},
            {id: 4, age: 21},
            {id: 5, age: 17},
            {id: 6, age: 20},
            {id: 7, age: 25},
];

let calc = users.filter((id) => id.age > 18 && id.age < 21)
let age = ['age: 19','age: 20']
console.log(age.indexOf('age: 19', 'age: 20'))
console.log(calc)



    