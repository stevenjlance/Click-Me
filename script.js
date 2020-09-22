console.log("running");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");

var content1 = document.querySelector("#content1");
var content2 = document.querySelector("#content2");
var content3 = document.querySelector("#content3");
var content4 = document.querySelector("#content4");
var content5 = document.querySelector("#content5");

button1.addEventListener("click", (e) => {
  content1.innerHTML += "Hello World ";
})

button2.addEventListener("click", (e) => {
  content2.innerHTML = "Never going to give you up";
})

button3.addEventListener("click", function(){
  content3.innerHTML = `<h1>Never going to let you down 🎤</h1>`
})

button4.addEventListener("click", function(){
  content4.innerHTML = `<img src = "bestHomeroom.png">`
})

button5.addEventListener("click", function(){
  content5.innerHTML = `<a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO">Click Me</a>`
})
