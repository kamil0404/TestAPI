const url = 'https://jsonplaceholder.typicode.com/posts'
var app = document.getElementById("app")

function getData () {
axios.get(url)
.then(response => {
    data = response.data
    data.forEach(element => {
        app.innerHTML = `<div>${element.userId}</div>
        <div>${element.id}</div>
        <h1>${element.title}</h1>
        <p>${element.body}</p>
`
    });
    })
}
getData()

let numPage = 1;
let bePages = true;

document.addEventListener('scroll', (e) => {
   if(document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight && bePages == true) {
    numPage++
axios.get(url)
.then(response => {
    data = response.data
    data.forEach(element => {
        app.innerHTML = `<div>${element.userId}</div>
        <div>${element.id}</div>
        <h1>${element.title}</h1>
        <p>${element.body}</p>
`
    });
    })
   }
})
