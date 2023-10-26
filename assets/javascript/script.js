// !Task12

// function task12(num) {
// num = num.toString()
// const arr = []
//     for (let i = 0; i < num.length; i++) {

//         arr.push(num[i])
//     }
//     return arr
// }
// console.log(task12("23212"));

// !Task13

// function task13(num) {
//     num = num.toString()
// const arr = []
// for (let i = 0; i < num.length; i++) {

//     arr.push(num[i])
// }
// let max = 0
// for( let j = 0; j<arr.length;j++){
//     if (max<arr[j]) {
//         max=arr[j]
//     }
// }
// return max
//   }
// console.log(task13("23812"));

// !Task14

// function task14(num) {
//     num = num.toString()
// const arr = []
// for (let i = 0; i < num.length; i++) {

//     arr.push(num[i])
// }
// let min = arr[0]
// for( let j = 0; j<arr.length;j++){
//     if (min>arr[j]) {
//         min=arr[j]
//     }
// }
// return min
//   }
// console.log(task14("23812"));

// !Task15

//  function task15(num) {
//     num = num.toString()
// const arr = []
// for (let i = 0; i < num.length; i++) {

//     arr.push(num[i])
// }
// let cem =0
// let vurma=1
// let edort = 0
// for( let j = 0; j<arr.length;j++){
//    cem+= +arr[j]
//    vurma*= +arr[j]

// }
// edort=cem/arr.length
// console.log(cem, vurma, edort);

//   }
// console.log(task15("124"));

// !Task16

// function task16(num){
//     const arr = []
//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//             arr.push(i)

//         }

//     }
//     return arr

// }

// console.log(task16(12));

// !Task17

// function task17(num){
//     let count =0
//     const arr = []
//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//             count++

//         }

//     }
//     return count

// }

// console.log(task17(12));

// !Task18

// function task18(num){
//     const arr = []
//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//             arr.push(i)

//         }

//     }
//     let cem =0
//     let vurma=1

//     for( let j = 0; j<arr.length;j++){
//     cem+= +arr[j]
//     vurma*= +arr[j]

//      }
//     console.log(cem, vurma)

// }

// console.log(task18(12));

// !Task20

// function task20(num) {

// let a=0;
// let sade=0
// let murekkeb=0;

//     for (let i = 1; i <=num; i++) {
//         if(num%i===0){
//             a++
//         }
//     }
//     if(a<=2){
//     return "sade"}
//     else{
//         return "murekkeb"
//     }

// }
// console.log(task20(4));

// !Task21

// function task21(start, end) {
//   start = parseInt(start);
//   end = parseInt(end);
//   const arr = [];
//   let a = 0;
//   for (let i = start; i <= end; i++) {
//     a = 0;
//     for (let j = 0; j < i; j++) {
//       if (i % j == 0) {
//         a++;
//       }
//     }
//     if (a < 2) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(task21(0, 20));

// !Task22

// function task22(num) {
// num = num.toString()
//     for (let i = 0; i < num.length; i++){
//         if (num[i]!==num[num.length-1-i]) {
//             return "polindrom eded deyl"
//         }
//     }
//     return "polindrom ededdir"
// }
// console.log(task22("404"));

// !Task23

// function task23(start, end) {
//   start = parseInt(start);
//   end = parseInt(end);
//   let num;
//   let polidrom = 0;
//   const arr = [];
//   for (let i = start; i < end; i++) {
//     polidrom = 0;
//     num = i.toString();
//     for (let j = 0; j < num.length; j++) {
//       if (num[j] !== num[num.length - 1 - j]) {
//         polidrom = 0;
//       } else {
//         polidrom = 1;
//       }
//     }

//     if (polidrom == 1) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(task23(0, 60));

//! Task24



// function Task24(num) {
//     const arr = []
//     let sum = 0
//     for (let i = 0; i < num; i++) {
//         if (num%i==0) {
//             arr.push(i)
//         }
//     }
//     for (let j = 0; j < arr.length; j++) {
//         sum=sum+arr[j]
//     }
//     if(num==sum){
//         return "mukemmel ededdir"
//     }
//     else{
//         return "mukemmel deyl"
//     }
// }

// console.log(Task24(6));


//! Task25

// function task25(num,n) {
//     let sum= 1
//     for (let i = 0; i < n; i++) {
//         sum*=num
//     }
//     return sum
// }
// console.log(task25(5,3));


//! Task26
// function task26(...params) {
//     const arr= []
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2==1) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(task26(2,3,1,7,6,5));


//! Task27
// function task27(...params) {
//     const arr= []
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2==0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(task27(2,3,1,7,6,5));

//! Task28
// function task28(...params) {
//     const arr= []
//     for (let i = 0; i < params.length; i++) {
//         if (i%2==1) {
//             arr.push(params[i])
//         }
//     }
//     return arr
// }
// console.log(task28(2,3,1,7,6,5));


//! Task29
// function task29(...params) {
//     const arr= []
//     for (let i = 0; i < params.length; i++) {
//         if (i%2==0) {
//             arr.push(params[i])
//         }
//     }
//     return arr
// }
// console.log(task29(2,3,1,7,6,5));


//! Task30
// function task30(...params) {
//     let max=0
//     for (let i = 0; i < params.length; i++) {
//         if (max<params[i]) {
//             max=params[i]
//         }
//     }
//     return max
// }
// console.log(task30(2,3,1,7,6,5));

//! Task31
// function task30(...params) {
//     let min=params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (min>params[i]) {
//             min=params[i]
//         }
//     }
//     return min
// }
// console.log(task30(2,3,1,7,6,5));


//! Task32
// function task32(...params) {
//     let max=0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2==0 ) {
//             if (max<params[i]) {
//                             max=params[i]
//                         }
//         }
//     }
//     return max
// }
// console.log(task32(2,3,1,7,6,5));

//! Task33
// function task33(...params) {
//     let min=params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2==0) {
//             if (min>params[i]) {
//                             min=params[i]
//                         }
//         }
//     }
//     return min
// }
// console.log(task33(2,3,1,7,6,5));



//! Task34
// function task34(...params) {
//     let max=0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2==1 ) {
//             if (max<params[i]) {
//                             max=params[i]
//                         }
//         }
//     }
//     return max
// }
// console.log(task34(2,3,1,7,6,5));

//! Task35
// function task35(...params) {
//     let min=params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2==1) {
//             if (min>params[i]) {
//                             min=params[i]
//                         }
//         }
//     }
//     return min
// }
// console.log(task35(2,3,1,7,6,5));