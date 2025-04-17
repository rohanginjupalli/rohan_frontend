// Custom Fetch Simulator

// Write a function called customFetch(url, callback) that mimics the behavior of a real API call using a callback.
// If the URL is valid ("https://myapi.com/data"), return mock data after 2 seconds.
// Otherwise, return an error.

//  Problem Statement: "Check Even Number with Callback"

// function checkEvenOrNot(number , callback) {
//     setTimeout(() => {
//         if((number%2)==0){
//             console.log("The given number is Even");
//             callback(null,number)
//         }
//         else{
//             console.log("The given number is Not Even");
//             callback(new Error("Enter correct number"),number)
//         }
//     }, 2000);
// }

// //callback
// function hello(error,number){
//     if(error){
//         console.log("Hey Mr....! you entered wrong!")
//     }
//     else{
//         console.log("Nice you have entered an correct number",number)
//     }
// }

// checkEvenOrNot(11,hello);

// function multipleOfTwo(){
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Hey i am Rohan")
//         reject(new Error("hey what happened i was rejected"))
//     }, 2000);
// })
// }

// multipleOfTwo()
//     .then((value)=>{
//     return value*2
// }).then((value1)=>{
//     return value1*2
// }).then((value2)=>{
//     return value2*2
// }).then((result)=>{
//     console.log("The final answer was : " + result)
// }).catch((error)=>{
//     console.log("Some error has been occured : ",error)
// })
