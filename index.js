let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');


addtodobutton.addEventListener('click', function(){
   var paragraph = document.createElement('p');    //create paragraph tags
   paragraph.innerHTML = inputfield.value;
   todocontainer.appendChild(paragraph);          // create paragraph tags one on the orther
   inputfield.value = "";
   paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
    paragraph.style.textDecorationColor = "red";
   })
   paragraph.addEventListener('dplclick', function(){
    todocontainer.removeChild(paragraph);
   })
})
