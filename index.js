/*function isEvenorOdd(n) {
  if (n % 2 == 0) {
    console.log(n + "is a Even number")
  }
}
console.log(isEvenorOdd(10))*/
function printer1(name){
  console.log("helo"+name)
}
function printer2(name){
  console.log("hi"+name)
}
function intermediate(fn,name){
  fn(name)
}
intermediate(printer2,"gowtham")


