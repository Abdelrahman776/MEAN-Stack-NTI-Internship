"use strict";
console.log("hello typescript");
let x;
x = 10;
let y;
y = 'ali';
y = true;
let arr1;
arr1 = [1, 2, 4, 'ali'];
let o;
o = 10;
if (typeof (o) === 'number') {
    o += 20; //in unknown type we have to check type befor anything
}
// tuples
let tup;
tup = ['d', 3, false]; // must be same data type, same order same number of variables in array
function myfun(part1, part2) {
    // can edit tsconfig to get error for nousedparameters true;
    return part1;
}
myfun(33, "ddd");
let c;
c = "hkfh";
let myobj = { name: "ali", age: 20 };
//enum
var size;
(function (size) {
    size[size["large"] = 500] = "large";
    size[size["medium"] = 750] = "medium";
    size[size["regular"] = 300] = "regular";
})(size || (size = {}));
let price = size.large;
//type casting
let h = 'helloworld';
let hh = h.length;
let hhh = h.length; // conflict  with react.js
// function getName() {
//   let f = document.getElementById('myname') as HTMLInputElement //you have  to specify the html tag type
//  console.log( f.value)
// }
function gettimetable() {
    let numm = document.getElementById("mynumber");
    let table = document.getElementById("tt");
    let i = 1;
    for (i; i <= 10; i++) {
        let jj = parseInt(numm.value);
        table.innerHTML +=
            `<li>
     ${i} x ${jj} = ${i * jj}
     </li>
      `;
    }
    document.appendChild(table);
}
