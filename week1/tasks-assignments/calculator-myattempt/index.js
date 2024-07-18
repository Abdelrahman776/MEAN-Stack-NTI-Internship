
// let name = "Adel Mahmoud"

// console.log(name.indexOf(" "))
// console.log(name.slice(0,4))



// console.log("test")



// function factorial(num){

//     if (num < 2){return 1}
//     return num * factorial(num-1)
// }

// console.log(factorial(3))



let calc = document.getElementById("calc");
let result = document.getElementById("result");

let num0 = document.getElementById("0")
let num1 = document.getElementById("1")
let num2 = document.getElementById("2")
let num3 = document.getElementById("3")
let num4 = document.getElementById("4")
let num5 = document.getElementById("5")
let num6 = document.getElementById("6")
let num7 = document.getElementById("7")
let num8 = document.getElementById("8")
let num9 = document.getElementById("9")
let plus = document.getElementById("+")
let minus = document.getElementById("-")
let multi= document.getElementById("*")
let division = document.getElementById("/")
let clear = document.getElementById("C")
let equal = document.getElementById("=")


num0.onclick = function(){
    calc.textContent += "0"
}

num1.onclick = function(){
    calc.textContent += "1"
}

num2.onclick = function(){
    calc.textContent += "2"
}

num3.onclick = function(){
    calc.textContent += "3"
}

num4.onclick = function(){
    calc.textContent += "4"
}

num5.onclick = function(){
    calc.textContent += "5"
}

num6.onclick = function(){
    calc.textContent += "6"
}

num7.onclick = function(){
    calc.textContent += "7"
}

num8.onclick = function(){
    calc.textContent += "8"
}

num9.onclick = function(){
    calc.textContent += "9"
}

plus.onclick = function(){
    calc.textContent += "+"
}

minus.onclick = function(){
    calc.textContent += "-"
}

multi.onclick = function(){
    calc.textContent += "*"
}

division.onclick = function(){
    calc.textContent += "/"
}

clear.onclick = function(){
    calc.textContent = ""
    result.textContent = ""
}

equal.onclick = function(){
    result.textContent = math.evaluate(result.textContent + calc.textContent)
    // calc.textContent = math.evaluate(calc.textContent)
    calc.textContent = ""


}


let equation = calc.textContent;
