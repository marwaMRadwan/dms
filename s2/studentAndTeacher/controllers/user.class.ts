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
    getData(){
        console.log("from user")
    }
}
