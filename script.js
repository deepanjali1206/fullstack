
function fun1(){

let a=10;
let b=20;

function fun2(){
    let c=40;
    function fun3(){
        return a+b+c;

    }
return fun3;
}
return fun2;
}
console.log(fun1());        //output--fun2

let returnFun=fun1();
console.log(returnFun());               //output-30


fun1()();     //call function2   [fun1()=fun2]()
fun1()()();     //call function3
console.log(fun1()()());       //output-70


// function fun1(){

//     let a=10;
//     let b=20;
    
//     function () => {        Arrow function  
//         let c=40;
//         function fun3(){
//             return a+b+c;
    
//         }
//    return fun3;
//     }
//    return fun2;
//     }

