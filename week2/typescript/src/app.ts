console.log("hello typescript");


let x:number;
x = 10;

let y: string | boolean;
y = 'ali';
y = true;


let arr1: (number |string)[];
arr1 = [1, 2, 4, 'ali']

let o: unknown;
o = 10;
if (typeof(o) === 'number') {
  o+=20 //in unknown type we have to check type befor anything
}

// tuples
let tup: [string, number, boolean];
tup = ['d', 3, false]  // must be same data type, same order same number of variables in array
function myfun(part1: number , part2?: string | number):number { //?  to make optional parameted from end
  
  // can edit tsconfig to get error for nousedparameters true;

  return  part1;

  
}
myfun(33, "ddd")


//Alias types
type ss = string;

let c: ss;
c = "hkfh";

type mytype = {
  name: string,
  age:number
}
let myobj: mytype = { name: "ali", age: 20 }
//enum



enum size{

  large = 500, medium = 750,
  regular=300
}

let price = size.large;

//type casting

let h: any = 'helloworld'

let hh: number = (h as string).length
let hhh: number = (<string>h).length  // conflict  with react.js


// function getName() {
//   let f = document.getElementById('myname') as HTMLInputElement //you have  to specify the html tag type
  

//  console.log( f.value)
// }


function gettimetable() {
  
    let numm = document.getElementById("mynumber") as HTMLInputElement
  let table = document.getElementById("tt") as HTMLUListElement


  let i: number = 1;
  for (i; i <= 10; i++){
    
    let jj: number = parseInt(numm.value)
    table.innerHTML +=
     `<li>
     ${i} x ${jj} = ${i * jj}
     </li>
      `;
}
  document.appendChild(table)
  
  
}
