import { User } from './user.class';
import { Grade } from '../models/grade.model'
export class Student extends User{
    private grades : Grade[]
    constructor(id : number, name:string, age:number, dob:Date, phone:string, grades: Grade[]){
        super(id, name, age, dob, phone);
        this.grades = grades;
    }
} 
