// Creation of async function
async function getData() {
    setTimeout(function() {
        console.log("I am inside setTimeout Block")
    }, 3000)
}
let output = getData();



// Fetch API - get request
async function getData1() {
    // Get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // parse json - async
    let data = await response.json()
    console.log(data);
}
getData1();



// Fetch API - post request
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({username: "Anas Rajput"}),
    header: myHeaders,
};

async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("My Data: ", data);
}
postData();