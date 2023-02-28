//1

class User {
    #name
    constructor(name,login,age){
        this.#name = name;
        this.login = login;
        this.age = age;
    }     
}

let user1 = new User ('Mike', 'MK 18', 18);
let user2 = new User ('', 'NRG', 22);

console. log (user1. login);
console. log (user1. age) ;  
console. log (user2.login) ; 
console. log (user2.age) ; 



//2

// class User {
//     #name;
//     constructor(name, login, age) {
//       this.#name = name;
//       this.login = login;
//       this.age = age;
//     }

//     getName(isAdmin) {
//       if (isAdmin && this.#name) {
//         return this.#name;
//       } else if (isAdmin && !this.#name) {
//         return this.login;
//       } else {
//         return "Permission denied";
//       }
//     }
//   }
  
//   let user1 = new User('Mike', 'MK 18', 18);
//   let user2 = new User('', 'NRG', 22);
  
//   console.log(user1.getName(true)); 
//   console.log(user2.getName(true)); 
//   console.log(user2.getName(false)); 


//3

// class User {
//     #name;
//     constructor(name, login, age) {
//       this.#name = name;
//       this.login = login;
//       this.age = age;
//     }

//     getName(isAdmin) {
//       if (isAdmin && this.#name) {
//         return this.#name;
//       } else if (isAdmin && !this.#name) {
//         return this.login;
//       } else {
//         return "Permission denied";
//       }
//     }

//     ChangeName(newName, password) {
//         if (password === '123') {
//           const oldName = this.#name;
//           this.#name = newName;
//           console.log(`Name Changed from ${oldName} to ${newName}.`);
//         } else {
//           console.log('Permission denied.');
//         }
//     }
// }
  
// let user1 = new User('Mike', 'MK 18', 18);
// let user2 = new User('', 'NRG', 22);
// user1.ChangeName('Bill', '123'); // Name Changed from Mike to Bill. 
// user1.ChangeName('John', 'wrongpassword'); // Permission denied.
 

//4

// class Admin extends User {
//     #isAdmin = true;
  
//     getUserName(user) {
//       return user.getName(this.#isAdmin);
//     }
//   }
  
//   let admin = new Admin('Admin', 'ADM', 30);
  
//   console.log(admin.getUserName(user1)); // Mike



  //5

// class User {
// constructor(name, phone) {
//     this.name = name;
//     this._phone = phone;
// }

// getPhone(isAdmin) {
//     let phoneArr = this._phone.split('-');
//     let hiddenPart = '******';
//     let lastIndex = phoneArr.length - 1;
//     if (!isAdmin) {
//         phoneArr[lastIndex - 1] = hiddenPart;
//         phoneArr[lastIndex] = phoneArr[lastIndex].slice(-2);
//     }
//     return phoneArr.join('-');
//     }
// }

// let user1 = new User('Mike', '067-888-80-99');
// let user2 = new User('Tom', '099-888-88-99');
// console.log(user1.getPhone(false)); 
// console.log(user2.getPhone(false)); 
// console.log(user1.getPhone(true)); 
// console.log(user2.getPhone(true)); 