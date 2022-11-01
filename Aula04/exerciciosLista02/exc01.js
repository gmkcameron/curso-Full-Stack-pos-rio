let a = 4
let b = 2
let c = 9

/* triangulo:
a + b > c
a + c > b
b + c > a */

if ((a + b > c) && (a + c > b) && (b + c > a)) {
    console.log("É possível formar um triângulo") 
} else {
    console.log("O triângulo não é válido!")
}