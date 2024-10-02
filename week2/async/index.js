// code execution line by line

/*
    Code run in a thread 
 */
// code start from here
function sum(n){                   // The function in store in the stack memory 
    let ans = 0;
    for(let i = 1; i<=n; i++ ){
        ans += i
    }
    return ans
}

let ans = sum(2)    // Here we call the function, the function is called from the stack memory.
// Here we are storing the output of the function in variable 
// console.log(ans)    // Printing out the output



// -------------------------------- Synchronous code   ----------------------------------

// code will execute line by line or one by one 
// It is also known as blocking code 

let ans1 = sum(100);
// console.log(ans1)

let ans2 = sum(12);
// console.log(ans2)

let ans3 = sum(100000000);
// console.log(ans3)



// ------------------  I/O heavy operations ---------------
/*
I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer 
between the program and external systems or devices. These operations usually require waiting for data to be
 read from or written to sources like disks, networks, databases, or other external devices, which can be 
 time-consuming compared to in-memory computations.
Examples of I/O Heavy Operations:
Reading a file
Starting a clock
HTTP Requests
 */


// reading a file
const fs = require("fs");

const content = fs.readFileSync('a.txt','utf-8');

// console.log(content)


// for example defining function in object
var user  = {
    age:21,
    name:'shubham',
    calculate:function(){
        return this.age;
    }
}

const useAge = user.calculate()
console.log(useAge)



// -------------- Functional Agreement ----------
// Passing a function to another function as a agreement

function summer(a,b){
    return a+b
}


function doOperation(a,b,op){
    return op(a,b)
}


// console.log(doOperation(1,2,summer))



// ------------- Reading file asychorous -------------
fs.readFile("a.txt","utf-8",(err,content)=>{
    if(err){
        console.log(err)
    }
    // console.log(content)
})





// -------------- sample code ---------------------

// output is  Hi , c = 20, Hi There

// The code will run line by line first hi will print
// The setTimeout will run but it Will run in background untill the time stop it is a I/O bound task after completion it will push to a queue
// The for loop will run it is CPU bound task Will run untill it gets completed and after that it will print out
// The we will go to the queue and the result of setTimeout 


console.log("Hi");

setTimeout(()=>{
    console.log("Hi There")
},1000)


let c = 0; 
for(let i =0 ;i<20;i++){
    c++;
}

console.log("c = ",c)

