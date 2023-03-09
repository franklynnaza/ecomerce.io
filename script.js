// console.log("hello world") 
// let a= 10
// function outer(){
//     let b =20
//     function inner(){
//         let c= 30
//         console.log(a, b, c)
//     }
//     inner()
    
// }
 




// const lom =0
// if (lom > 0){
//     console.log("number is positive")
// }
// else  if(lom < 0){
//     console.log("number is negative")
// }
// else{
//     console.log(" number is zero")
// }

// let b =2
// // for loop
// for(let i = 1; i <=50; i++){
//     console.log("interation number" + i)
// }let u= 1
// while( u<=5){
//     console.log("interation number" + u)
//     u++
// }
// let k =1
// do {
//     console.log("interation number" + k)
//     k++
// } while (k <= 5)
// const numarray=[1, 2, 3, 4, 5]
// for (const num of numarray){
//     console.log("interration number" + num)
// }

// function greet(username){
//    console.log("goodmorning " + username)
// }
// greet("bruce")
// greet("clark")
// greet("diana")

// const num =-5
// if (num > 0){
//     console.log("number is positive")
   
// }
// else(
//     console.log (" number is not positive")
// ) 

function outer(){
let counter = 0
function inner(){
    counter++
    console.log(counter)
}
 return inner
}
const fn = outer()
fn()
fn()
fn()
fn()
fn()
fn()
fn()










function sum(a, b, c){
    return a+b+c
}
console.log(sum(2,3,4))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return(a,b,c)
            }
        }
    }
}




const curriedsum = curry(sum)
console.log(curriedsum(2)(3)(4))
const add2 = curriedsum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)












function saymyname(name){
    console.log("gbv        bc")
}











// var  menu =document.getElementById("menu");

// menu.style.maxHeight="0px"
// function menutoggle(){
//     if(   menu.style.maxHeight=="0px")
//     {
//         menu.style.maxHeight="200px";
//     }
//     else{
//         menu.style.maxHeight="0px";
//     }
// }



nav






var nav = document.querySelector("nav");
  var togglew = document.getElementById("togglew");
  var polish =document.getElementsByClassName("polish");
 
      function menutoggle(){
nav.style.transform = "translateX(00px)"
 togglew.style.display=("none")
 nav.style.transition ="transform .5s"
}
function tipl(){
    nav.style.transform = "translateX(300px)"
    togglew.style.display=("initial")
    nav.style.transition ="transform .5s"
}
function acty(){
    nav.style.transform = "translateX(300px)"
    togglew.style.display=("initial")
    nav.style.transition ="transform .5s"
}















