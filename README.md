CLICK ME LAB
=========
![](https://media.giphy.com/media/QsCHgEPBO1zixjSlQM/giphy.gif) 
Sometimes when you see a button, you just have to click it. 

**GOAL**: Today we are going to use JavaScript to modify our webpages when a button is clicked!

`innerHTML`
-----------
We are going to modify the HTML of our webpage using the `.innerHTML` command. `.innerHTML` is used to set or return the value of an HTML element. For example, if I wanted to update the value of the HTML for something that has an id of `#button`, I could use `innerHTML` with an event listerner:
```javascript
var item = document.querySelector(“#button”);
item.addEventListener(“click”, function(){
	//Changes the innerHTML to the object to Hello World!
	item.innerHTML = “Hello World!”;
}

```

TODAY'S TASKS
-------------
1. We need to select for all the buttons on the page. Use `document.querySelector` to select for all 5 buttons. Each button has a unique ID that you should be selecting for. Reminder that the syntax for `querySelector` is:
```javascript
// Select for button with an ID of button1
var button1 = document.querySelector("#button1");
```
2. Next, we need to select for all the `<div></div>` HTML elements where we will output information. Use `document.querySelector` to select for all 5 divs. The first div selector should look like:
```javascript
// Select for div with an ID of content1
var content1 = document.querySelector("#content1");
```
3. Attach event listeners to each button such that the message of "Button 1 clicked" (or some variation of this) is printed to the console everytime the button is clicked. **BONUS**: Experiment with other types of events like mouseover, mousemove, etc. The event listener for button1 would look like this:
```javascript
button1.addEventListener("click",function(){
  console.log("Button 1 clicked!");
})
```
4. Using `innerHTML`, update the `<div id="content1"></div>` to say Hello World! when the button is clicked.
![](https://media.giphy.com/media/btgCagST8O6Cm6IGrb/giphy.gif) 
Remember that to update the innerHTML inside the event listener we would do something like:
```javascript
button1.addEventListener(“click”, function(){
	//Changes the innerHTML to the object to Hello World!
	content1.innerHTML = “Hello World!”;
}
```
5. Update the `<div id="content2"></div>` with your own message when button2 is clicked!
6. Update the `<div id="content3"></div>` with text in an h1 header when button3 is clicked. We can also add in HTML tags with inner HTML by using the accent key (`). **NOTE**: This is the key next to the number 1 on your keyboard.
```javascript
content3.innerHTML = `<h1>This lets me put a header in</h1>`
```
7. Update the `<div id="content4"></div>` with the image of the best homeroom (image is in your files) when button4 is clicked!
8. Rick roll the person by giving them a link that takes them to the [YouTube video](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO) when they click button5.
**HINT**: The HTML tag for a link is `<a href="PASTE_LINK_HERE">CLICK ME</a>`