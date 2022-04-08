const appInput = document.querySelector(".app-input");

//  listens for event on button and runs function handleAppInput
document
  .querySelector(".add-btn")
  .addEventListener("click", () => handleAppInput());

// Listens for keypress 'Enter' in input and runs function handleAppInput
document.querySelector(".app-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAppInput();
  }
});

// When sort button is clicked runs function sortingTodo
document
  .querySelector(".sort-btn")
  .addEventListener("click", () => sortingTodo());

function handleAppInput() {
  const containerItems = document.querySelector(".items-container");

  // Checks if there is input then if there is input it creates elements with said input
  if (appInput.value) {
    // Creates a div with classname todo-item
    const todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todo-item");

    // creates a div with
    const inputContainer = document.createElement("div");
    inputContainer.setAttribute("class", "todo-item-input");

    // Creates a p element with classname of todo-task and sets the text of p to input of user
    const pElement = document.createElement("p");
    pElement.setAttribute("class", "todo-task");
    pElement.textContent = appInput.value;

    // Creates checkbox
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkbox");

    //  Adds eventlistener to checkbox runs function renderRemoveBtn
    checkBox.addEventListener("click", (e) => renderRemoveBtn(e, todoItem));

    // Appends p element and checkbox to div with classname todo-item
    inputContainer.append(checkBox, pElement);

    todoItem.append(inputContainer);

    // appends the above todoItem to body
    containerItems.append(todoItem);

    //  simple reset of input once above is done.
    appInput.value = null;
  } else {
    console.log(appInput.value);
  }
}

function renderRemoveBtn(e, todoItem) {
  // if checkbox, checked is true creates remove button.
  const { checked } = e.target;

  if (checked) {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("class", "items-buttons-container");

    // Creates element of div with classname of remove-btn
    const removeItemBtn = document.createElement("div");
    removeItemBtn.setAttribute("class", "remove-btn btn");
    removeItemBtn.textContent = "Remove item";

    // buttonsContainer.append(editBtn, removeItemBtn)
    todoItem.append(removeItemBtn);

    // adds eventlistener to  button created above
    removeItemBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  } else {
    e.target.parentNode.nextSibling.remove();
  }
}

function sortingTodo() {
  // Objects of each element with the classname of todo-item
  const todoItems = document.querySelectorAll(".todo-item-input");

  // Initialze an array, will be used for pushing in text from the dom
  const arrayTodoitems = [];

  //   Pushes textcontent from each element targetted in dom into array initialized above.
  todoItems.forEach((item) => {
    arrayTodoitems.push(item.lastChild.textContent);
  });
  //  sorted array. String (Might use regex instead)
  const sortedArrayTodoitems = arrayTodoitems.sort((a, b) =>
    a.localeCompare(b)
  );

  //  Sorted array,  new textcontent
  todoItems.forEach((el, index) => {
    el.lastChild.textContent = sortedArrayTodoitems[index];
  });
}
