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
// enum Months { jan = 10, feb=13, Mar, Apr, May, false }
// // console.log(Months[10]);
// // console.log(Months["jan"]);
// if(Months[10] == "jan")
//control statements
// if(true){ }
// else if(false){}
// else{}
// let month: number | string =1
// month = "1"
// if(typeof month == "string"){
//     switch (month){
//         case "1": break;
//     }
// }
// else{
//     switch (month){
//         case 1: break;
//     }
// }
// for while do while 
// for(; ;){
// }
// let num =5
// while(true){
//     if( num !=5) continue
//     num = 3
// }
// function x() : number|string{
//     return 9
// }
// const myFun = (a:number|string=1, b:string|null="bd", c: string[]=[]):number =>{
//     return 8
// }
// myFun("m", "jh")
// myFun("a", null, ["gh", "hg"])
// let d = new Date()
// console.log(d)
// type myX = number|string
// function myFun (b:number , ...a: myX[] ){
//     // a = [ "hhu", 5, 5, "hg"]
//     a.forEach(el=> console.log(el))
// }
// myFun(1, "hhu", 5, 5, "hg")
// function Car(palteNum, Model){
//     this.palteNum = palteNum
//     this.Model = Model
// }
// Car.prototype.getData= function(){
//     console.log(this.palteNum)
// }
// let c = new Car("a", "b")
// c.getData()
var Car1 = /** @class */ (function () {
    function Car1(palteNum, Model, x) {
        if (x === void 0) { x = 0; }
        this.palteNum = palteNum;
        this.Model = Model;
    }
    return Car1;
}());
var c1 = new Car1(5, "b");
