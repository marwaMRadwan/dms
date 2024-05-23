export class User{
    protected id: number;
    protected name: string;
    protected age: number;
    protected email: string;
    protected dob: Date;
    protected phone: string;
    
    constructor(id : number, name:string, age:number, dob:Date, phone:string){
        this.id = id
        this.name = name;
        this.age = age;
        this.dob =dob
        this.phone = phone;
    }
    set _id(val:number){
        this.id= val
    }
    get _id():number{ return this.id}
    getData(){
        console.log(this._id)
    }
}
// c._id = 5