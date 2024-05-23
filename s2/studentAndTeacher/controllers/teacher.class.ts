import { User } from './user.class';
export class Teacher extends User{
    private subject : string[]
    constructor(id : number, name:string, age:number, dob:Date, phone:string, subject: string[]){
        super(id, name, age, dob, phone);
        this.subject = subject;
    }
    getData():void{
        console.log(this.subject);
        console.log(this.age)
        console.log(this.name)
    }
}