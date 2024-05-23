// let myArr : string[] 
// myArr = ["vgdhvhd"]
// myArr.push(false)
//name, age, isMarried
// let user: [string, number]
// user = ["marwa", 39]
// let user : {
//     name:string,
//     age:number|undefined,
//     isMarrid: boolean
// }
// user = {
//     name:"marwa",
//     isMarrid:false,
//     age:undefined
// }
// user.abc = "test"
// let x : [string|number]
// x = ["mnjs"]
// let z : any[]
// let y : any
// y = ["hgdh", 65566]
// console.log(y)
// y = {
// name:"hgdhdh"
// }
// y = 8
// y=""
// y=true
// y = [
//     "marwa",
//     8, 
//     {name:"mohammed"},
//     [1,3,6],
//     false
// ]
// let a : string[] | number[]
// a= ["a","d"]
// a.push(5)
// a= [1,5,3]
// type alNum = string|number
// let x : alNum[]
// x = ["a","b","c",7,7, 8.5]
// type myT = [string, number]
// let s : myT[]
// s = [
//     ["ma",7]
// ]
// enum
var Months;
(function (Months) {
    Months[Months["jan"] = 10] = "jan";
    Months[Months["feb"] = 11] = "feb";
    Months[Months["Mar"] = 12] = "Mar";
    Months[Months["Apr"] = 13] = "Apr";
    Months[Months["May"] = 14] = "May";
    Months[Months["false"] = 15] = "false";
})(Months || (Months = {}));
console.log(Months[10]);
console.log(Months["jan"]);
