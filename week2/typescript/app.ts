// //tsc -w
// let x:number;
// x = 10;

// let y: string | boolean;
// y='ali';
// y=true;

// let arr1:(number | string)[];
// arr1= [1,2,3,'ali'];

// // let arr:[string,number];
// // arr=['ali',2]

// let z :any;
// z=10;
// z += 10;
// console.log(z);

// let o:unknown;
// o=10;
// if(typeof(o) === 'number')
// {
// o += 20;
// }
// o += 10;

//Tuples
// let arr :[number,string,boolean];
// arr=[1,'ali',true];

// function myFun(par1:any=10,par2?:string|number):string | number {
//     console.log(par1,par2);
//     return 10;
// }
// myFun();


//Alias Types
// type myType = {
//     name:string,
//     age:number
// }
// let myObj:myType ={name:'ali', age:20};

// //enum
// enum size{
//     large =500,
//     mediem = 750,
//     regular = 300,
// }
//  let price = size.regular * 10;

//  // type casting
//  let x:any ='1000';
//  let y:number = (x as string).length;

//  let o:number = (<string>x).length;

// function getName(){
//     let x = document.getElementById('myName') as HTMLInputElement;
//     console.log(x.value)
// }

//Class

// class User{
//     public readonly name:string ;
//     constructor(name:string)
//     {
//         this.name = name;
//     }
// public greeting(age:number){
//     return `Hello ${this.name} your age is ${age}`
// }
// }

// class Student extends User{
//     grade:number;
//     constructor(name:string,grade:number){
// super(name);
// this.grade = grade;
//     }
// }

// let student = new Student('ali',10);

// class User{
//     name:string;
//     age:number;
//     myUser?:User;
//     static myUser: User;
//    private constructor(name:string,age:number){
//         this.name = name;
//         this.age=age;
//     }

//    static login(name:string,age:number):User{
//        if(!this.myUser)
//        {
//        this.myUser = new User(name,age);
//        }
//        return this.myUser;
       
//     }
// }
// let myUser = User.login('ali',10);


// abstract class User{
//    abstract name:string;
//     constructor(){
       
//     }
//     abstract greeting(msg:string):string;
// }

// class Student extends User{
//     name:string;
//     constructor(name:string){
//         super();
//         this.name = name;
//     }
//     greeting(msg: string): string {
//         return `${msg} ${this.name}`
//     }
// }

// let myStudent = new Student('ali');
// console.log(myStudent.greeting('Hi'))

interface User{
    name:string;
    age:number;
    setGrade(grade:number):void;
}
class Student implements User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    setGrade(grade:number):void{
       console.log(grade);
    }
}

