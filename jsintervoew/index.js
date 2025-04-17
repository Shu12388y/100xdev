// // console.log("A" + 1);
// // console.log("shubham" + "100");
// // console.log("1" + 1 + "1");
// // console.log("1" + 1 - "1"); // 11 as string ->

// // const a = {};

// // const b = {
// //   name: "shubham",
// //   name: "gap",
// // };

// // const c = {
// //   name: "fap",
// // };

// // a[b] = {
// //   score: 10,
// // };

// // a[c] = {
// //   score: 12,
// // };


// // console.log(a[b]);


// const y = 0 
// const z = false

// console.log(y == z) // true
// console.log(y === z) // false

// console.log(true - false);

// console.log("z" * 2)


// console.log(NaN == NaN)
// console.log(NaN === NaN)

// const arr = [1,2,3,4]
// const res =  arr.map((ele)=>{
//     return ele>2
// });


// const filterRes = arr.filter((ele)=>{
//     return ele>2
// })


// console.log(res)
// console.log(filterRes)



function abc(){
    console.log(abc.xyz)
}

abc()
abc.xyz = 400
abc.xyz = 200
abc()


const numbers = [1,2,3]
numbers[100] =90
console.log(numbers)


const list  = [..."shubham"];
console.log(list)



const obj={
    a:1,
    b:2,
    sum(){
        return this.a + this.b
    }
}

const r  = obj.sum;
console.log(r)
console.log(r())

