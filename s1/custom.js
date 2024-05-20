// var x = 5  // var x = 5
// var x="marwa"
// var x= false

//let
// let y = 6
// let y ="marwa"

// let z = 5
// function hello(){
//     let z=3;
// }

// hello()

// console.log(z);

// for(i=0; i<=2; i++){
//     let c=15
// }

// console.log(c)

// let arr = [1,2,3,4,5];

// for(let i = 0; i< arr.length; i++){

// }
//forEach
// sum =0
// arr.forEach( (el, i, a)=> {
//     console.log(el)
//     console.log(i);
//     console.log(a);
// })
// f1()
// function f1(){
//     console.log("f1");
// }

// f1()

// const f1  = function(x){
    
// }

// const f2 = (f) =>{

// }

// const f3 = (z) => z
/*
const f3 = (z)=>{
    return z
}

*/

// f1(5)
// f2(f)


    // ()=>{
    // console.log("test")
    // }()

// function z(){
//     return "z"
// }
// function x(){
    
//     y=z()
//     return y
// }

// arr = [1,2,3,4,5]

// arr.forEach(element => {
//     if(element>2) return
//     console.log(element);
// });

// const todos = [
//     {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true
//     }
//     ]

    // todos.forEach(todo => {
    //     console.log(todo.id);
    // })

// let result = todos.filter( el => el.id == 5 )
// console.log(result)


// callbacks
// const x  = ( cb ) => {
//     (()=>{
//         cb("inner function")
//     })()
//     //cb ("outer function")
// }
// x( res => console.log(res) )

// arr.forEach(element, i, a => {
    
// });


// const x = (data)=>{
//     return{
//         data,
//         add: ()=> {
//             return data + 5
//         },
//         sub: ()=> {
//             return data -3
//         }
//     }
// } 

// let a = x(5)
// console.log(a.data)

const myArrayMethods = (arr) => {
    return{
        arr,
        myForEach:(cb)=>{
            for(let i=0; i<arr.length; i++){
                cb(arr[i], i, arr)
            }
        },
        myIndex:()=>{}
    }
}

let x = myArrayMethods([1,2,3,4])
x.myForEach((el, i, arr)=> console.log(el , " - ", i, arr))












