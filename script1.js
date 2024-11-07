// //Synchronous Programming
//  console.log("hello");

// // function waitAsec(){
// //     let curr_time=new Date().getTime(); 
// // let fut_time=curr_time+1000;         //1s=1000ms
// // while(new Date().getTime()<fut_time);

// // }
// // // console.log(new Date().getTime());           // current time in milisec   
// // // let curr_time=new Date().getTime(); 
// // // let fut_time=curr_time+1000;         //1s=1000ms


// // function waitNsec(){
// //     for(let i=0;i<navigator;i++){
// //         waitAsec();
// //     }
// // }
// // waitNsec(6);     //total delay 6 sec
// // waitAsec();


// //Asynchronous Programming  
// //setTimeout,setinterval,clearinterval,promises,callback,asyn await  

// // setTimeout(()=>{                          //provide time delay (callback,time delay)
// //     console.log("inside setTimeout");
// // },5000)   

// // setInterval(()=>{
// //     console.log("data is Fecthed")    //provide particular delay call again and again after 1sec(infinite)
// // },1000) 

// // // to solve infinte problem 

// // let id = setInterval(()=>{
// //     console.log("data is Fecthed")    
// // },1000) 

// // setInterval(()=>{
// //     clearInterval(id)   
// // },8000) 

// // console.log("world");



// (function IIFE(){                                //immediately invoke function expression  4
//     console.log("Inside the function")

// })()
  

// (()=>{                                //immediately invoke function expression by arrow function
//     console.log("Inside the function")

// })()

// ((a,b)=>{                                //immediately invoke function expression
//     console.log(`SUM of a & b is  ${a+b}`)

// })(10,15)

    
//  let student=(function IIFE(){
//     let marks=90;
//     function student(){
//         details();
//     }
//     function details(){                                   //Abstract function
//         console.log(`percentage: ${(marks/100)*100}`)

//     }
//     return student;
// })()

// student();        //o/p-->  j  ;[] percentage : 90

//callback
function downloadBook(unzipped){
    setTimeout(()=>{
        console.log("book downloaded")
        unzipped();

    },5000)
}
function unzipped(parsing){
    setTimeout(()=>{
        console.log("book unzipped");
        setTimeout(()=>{
            console.log("book parsed")
        },3000)
    },2000)
}



downloadBook(unzipped(parsing));        //callback --ek func ko dusre func k andar as a argument pass krna
