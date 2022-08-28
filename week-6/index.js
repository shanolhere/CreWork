const text = document.querySelector('.text')
const submitBtn = document.querySelector('.submit')
const todoLists = document.querySelector('.todoLists')

const error = document.querySelector('.error')
// edit option
let editElement;
let editFlag = false;
let editID = "";

window.addEventListener("DOMContentLoaded", setupItems);

submitBtn.addEventListener("click", addToDo);

function addToDo() {
  const todoTitle = text.value;
  const id = new Date().getTime().toString();
  if (todoTitle !== "" && !editFlag){
    const element = document.createElement('li');
    const attr = document.createAttribute('data-id')
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
      <p class="title">${todoTitle}</p>
      <div class="operations">
        <button class="edit"><ion-icon name="create-outline"></ion-icon></button>
        <button class="delete"><ion-icon name="trash-outline"></ion-icon></button>
        <button class="timer"><ion-icon name="hourglass-outline"></ion-icon></button>
      </div>`
      todoLists.appendChild(element);

      // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteToDo);
    const editBtn = element.querySelector(".edit");
    editBtn.addEventListener("click", editToDo);

    // append child
    todoLists.appendChild(element);
    displayAlert("ToDo task added","green");
    addToLocalStorage(id,todoTitle);
    setBackToDefault();
  }
  else if(todoTitle !== "" && editFlag){
    editElement.innerHTML = todoTitle;
    displayAlert("ToDo task edited","green");
    editLocalStorage(editID,todoTitle);
    setBackToDefault();

  }
  else{
    displayAlert("Enter a ToDo task","red");
  }
}


// display alert
function displayAlert(text,color) {
  error.innerHTML = text;
  error.style.background=color;
  // remove alert
  setTimeout(() => {
  error.innerHTML = "";
  error.style.background="";
  },1000);
}

function setBackToDefault(){
  text.value="";
  editFlag = false;
  editID = "";
  submitBtn.textContent="Submit"
}


function deleteToDo(event) {
  const toDoToBeDeleted = event.currentTarget.parentElement.parentElement;
  const id = toDoToBeDeleted.dataset.id;

  todoLists.removeChild(toDoToBeDeleted);

  displayAlert("ToDo task deleted", "red");

  setBackToDefault();
  removeFromLocalStorage(id);
}

function editToDo(event) {
  const toDoToBeEdited = event.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = event.currentTarget.parentElement.previousElementSibling;
  //console.log(editElement)
  // set form value
  text.value = editElement.innerHTML;
  editFlag = true;
  editID = toDoToBeEdited.dataset.id;
  submitBtn.textContent = "Edit";
}

//Local Storage
//addToLocalStorage

function addToLocalStorage(id,todoTitle){
  const todo = {id,todoTitle};
  let  items = getLocalStorage();
  items.push(todo);
  localStorage.setItem("todos", JSON.stringify(items));

}

function getLocalStorage(){
  return localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[];
}

function removeFromLocalStorage(id){
  let  items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  })
  localStorage.setItem("todos", JSON.stringify(items));

}

function editLocalStorage(id,todoTitle){
  let  items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.todoTitle = todoTitle;
    }
    return item;
  })
  localStorage.setItem("todos", JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createList(item.id, item.todoTitle);
    });
  }
}

function createList(id, todoTitle) {
  const element = document.createElement('li');
  const attr = document.createAttribute('data-id')
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
    <p class="title">${todoTitle}</p>
    <div class="operations">
      <button class="edit"><ion-icon name="create-outline"></ion-icon></button>
      <button class="delete"><ion-icon name="trash-outline"></ion-icon></button>
      <button class="timer"><ion-icon name="hourglass-outline"></ion-icon></button>
    </div>`
    todoLists.appendChild(element);

    // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete");
  deleteBtn.addEventListener("click", deleteToDo);
  const editBtn = element.querySelector(".edit");
  editBtn.addEventListener("click", editToDo);

  //completed tasks functionality
  element.addEventListener("click", check);
  element.addEventListener('dblclick', uncheck);
  let checked = false;
  //timer functionality
  const timerBtn = element.querySelector(".timer");
  timerBtn.addEventListener("click", timerFunc);

  function check(e){
    let a = e.currentTarget.firstElementChild;
     if(event.target===a){
    a.style.textDecoration="line-through";
    a.style.color="grey";
    a.style.fontStyle="italic"
    element.style.borderLeft ="4px solid orangered"
    displayAlert("ToDo Task completed","green");
    checked = true;
    }
  }
  function uncheck(e){
    //console.log( "l");
    let a = e.currentTarget.firstElementChild;
    a.style.textDecoration="none"
    a.style.color="black";
    a.style.fontStyle="normal"
    element.style.borderLeft ="4px solid hsl(210, 36%, 96%)"
    displayAlert("ToDo Task Incomplete","red");

  }
  function timerFunc(e){
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes()
    console.log(currentHour, currentMinutes)
  }
  // append child
  todoLists.appendChild(element);
}
