// // // let student1 = {
// // //     name: "Daniel",
// // //     mark: 80,
// // //     Grade: function (){
// // //         if (this.mark >= 90) {
// // //             console.log("Grade A")
// // //         } 
// // //         else if (this.mark >= 75) {
// // //             console.log("Grade B")
// // //         }
// // //         else if (this.mark >= 60) {
// // //             console.log("Grade C")
// // //         }
// // //          else {
// // //             console.log("Fail")
// // //         }
// // //     }
// // // }
// // // student1.Grade()

// // // function book(name,author,year){
// // //         console.log(`Book: ${name},Author: ${author}, year: ${year}`);
// // // } 
// // // let book1 = new book(`Ek Samandar, Mere Andar`,	"Sanjeev Joshi",2024)
// // // let book2 = new book(` Mere Andar`,	"Sanjeev" ,2024)

// // function student(name, math, science, english) {
// //     let grade
// //     let total = ((math + science + english) / 3).toFixed(0)
// //     if (total >= 90) {
// //         grade = "A"
// //     }
// //     else if (total >= 70) {
// //         grade = "B"
// //     }
// //     else if (total >= 50) {
// //         grade = "C"
// //     } else {
// //         grade = "Fail"
// //     }
// //     console.log('student name: ' + name, 'total mark: ' + total, 'grade: ' + grade);
// // }

// // let student1 = new student('Daniel', 70, 80, 90)
// // let student2 = new student('Samuel', 90, 85, 90)


// // let num = [1, 2, 3, 4, 4, 5, 6, 5, 4, 2, 2, 4, 4]
// // let num1 = new Set()
// // let duplicate = new Set()
// // for (let get of num) {
// //     if (num1.has(get)) {
// //         duplicate.add(get)

// //     } else {
// //         num1.add(get)
// //     }
// // }
// // console.log(num1);
// // console.log(duplicate);

// // let array1 = [1, 2, 3, 4, 5]
// // let array2 = [3, 4, 5, 6, 7]
// // console.log(new Set([...array1, ...array2]));


// let student = [{
//     name: 'daniel',
//     mark: 55
// },
// {
//     name: 'jagan',
//     mark: 56
// },
// {
//     name: 'arul',
//     mark: 50
// },
// {
//     name: 'vignesh',
//     mark: 53
// },
// {
//     name: 'mullai',
//     mark: 50
// }]

// let score = student
// .filter(x => x.mark < 60)
// .sort((a,b)=> b.mark - a.mark)
// for(let marks of score){
//     console.log(marks.name.toUpperCase()+":"+marks.mark);
// }

// let array = [1,2,3,4,5,6,7,8,9]
// let Even = []
// let Odd = []
// array.forEach((num) => {
//     if (num%2 == 0) {
//          Even.push(num)

//     } else {
//         Odd.push(num)

//     }
// })

// console.log("Even: "+Even)
// console.log("Odd: "+Odd);

// function names(allow,words) {
//     let nameset = new Set(allow)

//     return words.filter(x => [...x]
//     .every(x => nameset.has(x))).length
// }
// let allow = 'dan'
// let words = ['daniel','danny','na','da']

// console.log(names(allow,words));

// let pattern = /dan/
// let input = ['daniel','danny','na','da']
// let find = input.some(x => pattern.test(x))
// console.log(find);




// // function daniel(params) {
// //     for(let i= 0; i < params.length; i++){
// //     if (params[i]%2 != 0) {
// //         continue;
// //     } 
// //     for (let j = 0; j < params.length; j++) {
// //         ans = params[j]

// //     }
// //     console.log(ans);
// // }



// // }
// // let number = [1,2,3,4,4,5,5,6]
// // console.log(daniel(number));

// let studentnames = [{name:'xxx',
//     mark: 80
// },{name:'yyy',mark:70},{name:'zzz',mark:60},{name:'mmm',mark:50},{name:'nnn',mark:30}]

// for (const name of studentnames) {
//     console.log(name.mark);
//     let studentmark = new Promise((resolve, reject) => {
//         if (name.mark >= 40) {
//             resolve("Pass")
//         } else {
//             reject("Fail")
//         }
//     });
//     studentmark.then(result => console.log(name.name + ':' + result))
//     .catch(error => console.log(name.name + ':' + error))
// }

// fetch("https://dummyjson.com/products")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("HTTP Error!");

//         }
//         return response.json()
//     })
//     .then(data =>{
//         for (let e of data.products) {
//         if (e.id == "1"){
//             console.log(e)
//     }
//     }})
//     .catch(error => console.log(
//         `Error in Fetching Data 
//               ${error} `))
// fetch("https://dummyjson.com/products/3")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("HTTP Error!");

//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     }
//     )
//     .catch(error => console.log(
//         `Error in Fetching Data 
//               ${error} `))

//object method

// const person = {
//     name: "Alice",
//     age: 23,
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//         console.log(this.age);
        
//     }
// };
// console.log(person.name)

//inheritance

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} barks`);
//     }
// }

// const d = new Dog('Tiger');
// d.speak(); 
// d.bark();


