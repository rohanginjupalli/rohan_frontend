// // callbacks

// function appendScript(url , callback) {
//     let script = document.createElement("script");
//     script.src = url;
//     document.body.appendChild(script);
//     script.onload = ()=>{
//         console.log("script got loaded");
//         callback(null,url);
//     }
//     script.onerror = ()=>{
//         console.log("error has been occured")
//         callback(new Error("some error have been occured"),url)
//     }
// }
// function hello(error,url){
//     if(error){console.log("Some error has been occured"+error)
//         return
//     }
//     alert("hello everone");
// }
// function goodmorning(error,url){
//     if(error){console.log("Some error has been occured"+error)
//         return
//     }
//     alert("Good morning");
// }
// appendScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" , hello);

// // promises

// let promise = new Promise((resolve,reject)=>{
//     let script = document.createElement("script");
//     let url = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js";
//         script.src = url;
//         script.onload = ()=>{
//             console.log("script got loaded");
//             resolve("script got resolved")
//         }
//         script.onerror = ()=>{
//             console.log("error has been occured")
//             reject(new Error("script got rejected"))
//         }
//         document.body.appendChild(script);
// })

// promise.then((value)=>{
//     console.log("the value was resolved " + value)
// })
// promise.catch((error)=>{
//     console.log("the value was resolved " + error)
// })



// // promsie chaining

// // Step 1: Place an order
// function placeOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("1️⃣ Order has been placed");
//             resolve("Order ID: 1234");
//         }, 1000);
//     });
// }

// // Step 2: Process payment
// function processPayment(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2️⃣ Payment processed for", orderId);
//             resolve("Payment ID: 5678");
//         }, 1000);
//     });
// }

// // Step 3: Ship the product
// function shipProduct(paymentId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3️⃣ Product shipped with", paymentId);
//             resolve("Tracking ID: ABC123");
//         }, 1000);
//     });
// }

// // Step 4: Show confirmation
// function showConfirmation(trackingId) {
//     console.log("4️⃣ Order complete! Your tracking ID is:", trackingId);
// }

// // 🚀 Chain the promises
// placeOrder()
//     .then((orderId) => {
//         return processPayment(orderId);
//     })
//     .then((paymentId) => {
//         return shipProduct(paymentId);
//     })
//     .then((trackingId) => {
//         showConfirmation(trackingId);
//     })
//     .catch((error) => {
//         console.log("❌ An error occurred:", error);
//     });


// // async and await

// async function rohan() {
//     let apweather = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("37 deg");
//         },1000)
//     })
//     let tgweather = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("37 deg");
//         },1000)
//     })

// }


// fetch api
// fetch("https://goweather.herokuapp.com/weather/Ny")

//   .then(response => response.json())

//   .then(data => console.log(data));


// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((value)=>{
//     console.log(value.status)
//     console.log(value.ok)
//     return value.json()
// }).then((value)=>{
//     console.log(value)
// })


// notes 
// call back functions -> call back function is an function that is passed as an argument to the another function that is called after an ansynchrous task is completed 
//


//normal callback function

// function greet(name,callback){
//     console.log("hello"+ name)
//     callback();
// }
// function goodMorning(){
//     console.log("Good Morning")
// }
// greet("Rohan",goodMorning)

// callback function with async function

// function greet(name,callback){
//     setTimeout(() => {
//     console.log("hello"+ name)

//     callback();
//     }, 5000);
// }
// function goodMorning(){
//     console.log("Good Morning")
// }
// greet("Rohan",goodMorning)













