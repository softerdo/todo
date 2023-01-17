//Selecting elements in DOM
const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemsList = document.querySelector('#itemsList');
const filters = document.querySelectorAll('.nav-items');

//Create an empty item list
let todoItems = [];

//setting a local storage
const setLocalStorage = function(todoItems){
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

//Get items from local storage
const getLocalStorage = function(){
  const todoStorage = localStorage.getItem("todoItems");
  if(todoStorage === 'undefined' || todoStorage === null){
    todoItems = [];
  }else{
    todoItems = JSON.parse(todoStorage)
  }

  console.log('Items', todoItems);
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = itemInput.value.trim();
    if(itemName.length === 0){
      alert("Please enter a task");
    }else{
      const itemObject = {
        name: itemName,
        isDone: false,
        addedAt: new Date().getTime()
      }
      todoItems.push(itemObject);
      setLocalStorage(todoItems);
    }
    
  });
  getLocalStorage();
})