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

// const myArrayMethods = (arr) => {
//     return{
//         arr,
//         myForEach:(cb)=>{
//             for(let i=0; i<arr.length; i++){
//                 cb(arr[i], i, arr)
//             }
//         },
//         myIndex:()=>{}
//     }
// }

// let x = myArrayMethods([1,2,3,4])
// x.myForEach((el, i, arr)=> console.log(el , " - ", i, arr))



// setTimeout(()=>{ console.log(1) }, 3000)
// setTimeout(()=>{ console.log(2) }, 1500)
// setTimeout(()=>{ console.log(3) }, 2000)
// setTimeout(()=>{ console.log(4) }, 1000)
// console.log(5)


//promise
// const myPro = (val) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(val>5) resolve("number greater than 5")
//             else reject("invalid number")
//         },2000)
//     })
// }

// myPro(2)
// .then(response =>  console.log(response) )
// .catch(err => console.log(err))

// async function d(){

// }
// const d = async function(){}
// const d = async() =>{
//     try{
//         let r = await myPro(5)
//         console.log(r)
//         let z = await myPro(15)
//         console.log(z)
//         await myPro(1)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// === ==

// 5 === "5"

// api call
// const url = "https://jsonplaceholder.typicode.com/todos?_limit=10"
// async function getData(cb){
//     try{
//         // let data = await fetch(url)
//         // let res = await data.json()
//         // console.log(res);
//         let data = await (await fetch( url )).json()
//         // console.log(data)
//         cb(data, null)
//     }
//     catch(e){
//         console.log(e.message)
//         cb(null, e.message)
//     }
// }
// getData( (res, err)=>{
//     if(err) return console.log(err)
//     console.log(res)
// })


// const dataWrap = document.querySelector("#dataWrap")
// if(dataWrap) dataWrap.innerHTML="Hello"
// console.log(dataWrap)


// const user = {
//     name: "marwa",
//     age: 39,
//     email:"marwa@techsexperts.com"
// }

// // localStorage.setItem("userData", JSON.stringify(user))

// const data = JSON.parse(localStorage.getItem("userData"))
// console.log(data)















