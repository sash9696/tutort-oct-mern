//DOM 

//browser creates an object version of ur document

//DOM manipulation => process of interactiong with the DOM

//Dom is a tree like structur that is made up of nodes
//each html , attribute, piece of text is represented as node
//root node => document

// console.dir(document);
// console.log(document.URL);



// DOM selectors

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector() => take arguments id selector, class selector or tag
//document.querySelectorAll()  => take arguments id selector, class selector or tag


// const title = document.getElementById('title');

// const buttons = document.getElementsByClassName("button");


// const buttons = document.getElementsByTagName("button");


// const title = document.querySelector('#title')

// console.log(title);

// const buttons = document.querySelectorAll(".button");

// console.log(buttons);


// Node list (document.querySelectorAll) => coolection of nodes , it can contain different types od nodes , (can be live (updating automatically) or static(fixed at the time of retiriveal) )

//HTML Collection (getElementsByTagName,getElementsByClassName ) => is always live , it updates automatically if the document changes, it contains only element nodes (no text nodes or comments)



const title = document.getElementById('title');

// title.textContent = 'HEllo World'
title.innerText = 'HEllo World'

title.style.color = 'red';
title.style.backgroundColor='green';


const addButton  = document.getElementById('addButton');


addButton.addEventListener('click', function(){
    alert('Button is clicked')
});