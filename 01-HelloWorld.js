var myVariable = 'global'
myOtherVariable = 'global'

function myFunction () {
    var myVariable = 'local'    
    return myVariable;
}
console.log(myVariable, myFunction()) // com () printa o valor da var

function myOtherFunction(){
    myOtherVariable = 'my other local'
    return myOtherVariable;
}
console.log(myOtherFunction) // clicar na  setinha torta permite ver o code da function

//página 35 - atribuições
var num = 2;
num *= 3  //multiplicar 
num /= 2 //dividir
console.log(num)

console.log(typeof num)

let arrObj = { name: "alex", age: 45 }
console.log(arrObj, "é um: " + typeof arrObj)

//operador delete valor
delete arrObj.age; //Delete age
console.log(arrObj)


function testTruthy(val){
    var val = "" //string  vazia = false, string normal/number/object = true
    return val ? console.log('truthy') : console.log('falsy')
} 
console.log(testTruthy())

//pag 40
var p = "packt"
console.log(p ? true : false)
console.log("packt" == true, "packt" == false, typeof p)

var person1 = {name:"jhon"}
var person2 = {name:"jhon"}
console.log(person1 === person2) //obj diferentes

//operador ternário

//função checar tipo ou valor e retorna-lo
function check () {
   var d = 2
    d === 2 ? d = "verdadeiro" : d = "falso";
    return d
} 
console.log(check())

// console.log()

//Executar uma função
function sayHello(){
    console.log("Hello!")
}
sayHello()

//Argumentos - pag 44
function output(text) {
    console.log(text)
}
output("Other Hello")

//Soma de Argumentos ***
function somar(numA, numB){
    return numA + numB
}
var result = somar(5, 2)
console.log(result)

// let circle = document.querySelector('#circleText')
// let a = 0
// function incCircle(){
//     circle.innerHTML = a 
//     a++
// }
// setInterval(incCircle, 1000)