
renderApp()





function renderApp(){
    
    //  ref to DOM body
    const body = document.body


    // ------ title h1 -------

    const title = document.createElement('h1')
    title.setAttribute('class', 'app-title')
    title.textContent = 'To-do'

    // ------ app div ------- 

    // creates element of div with classname app  appends to body 
    const app = document.createElement('div')
    app.setAttribute('class', 'app')



    // appends above to body
    body.append(title, app)


    

    // ------- input / button -------

    const divBtns = document.createElement('div')
    divBtns.setAttribute('class', 'sort-add-container')
    
    // Creates element of input with classname of app-input
    const appInput = document.createElement('input')
    appInput.setAttribute('class', 'app-input')
    
    // Creates element of div with classname of add-btn (div will be styled as a button)
    const addBtn = document.createElement('div')
    addBtn.setAttribute('class', 'add-btn btn')

    
    // Sets text to div aka button
    addBtn.textContent = 'Add'

    // Creates element of div with classname sort-btn (div will be styled as a button)
    const sortBtn = document.createElement('div')
    sortBtn.setAttribute('class', 'sort-btn btn')
    sortBtn.textContent = 'Sort'
    
    // Creates element of div with classname clearall-btn (div will be styled as a button)
    const deleteCheckedBtn = document.createElement('div')
    deleteCheckedBtn.setAttribute('class', 'delete-checked-btn btn')
    deleteCheckedBtn.textContent = 'Delete checked items'

    // container items 
    const containerItems = document.createElement('div')
    containerItems.setAttribute('class', 'items-container')

    
    divBtns.append(sortBtn,addBtn)

    //  Appends input and button to app div
    app.append(appInput, divBtns, containerItems)


    // ------- event input / buttons -------

    //  listens for event on button and runs function handleAppInput
    addBtn.addEventListener('click', () => handleAppInput(appInput, sortBtn))
            
        
    
    // Listens for keypress 'Enter' in input and runs function handleAppInput
    appInput.addEventListener('keydown', (e) =>{
        if (e.key === 'Enter') {
            handleAppInput(appInput, app)
        }
    
    })

    // When sort button is clicked runs function sortingTodo
    sortBtn.addEventListener('click', () => sortingTodo())

    //  Runs function clearItems
    deleteCheckedBtn.addEventListener('click', () => clearItems(app))

}




function handleAppInput(appInput){
       const containerItems = document.querySelector('.items-container')
    
    // Checks if there is input then if there is input it creates elements with said input
    if (appInput.value){
        
        
        // Creates a div with classname todo-item
        const todoItem =  document.createElement('div')
        todoItem.setAttribute('class', 'todo-item')
        
        // creates a div with 
        const inputContainer = document.createElement('div')
        inputContainer.setAttribute('class', 'todo-item-input')

        // Creates a p element with classname of todo-task and sets the text of p to input of user
        const pElement = document.createElement('p')
        pElement.setAttribute('class', 'todo-task')
        pElement.textContent = appInput.value

        // Creates checkbox 
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('class', 'checkbox' )

        //  Adds eventlistener to checkbox runs function renderRemoveBtn
        checkBox.addEventListener('click', (e) => renderRemoveBtn(e,todoItem))

     
        // Appends p element and checkbox to div with classname todo-item
        inputContainer.append(checkBox, pElement )

        todoItem.append(inputContainer)

        // appends the above todoItem to body
        containerItems.append(todoItem)

        //  simple reset of input once above is done.
        appInput.value = null

    }else {
        console.log(appInput.value)
    }
    
    

}




function renderRemoveBtn(e, todoItem){
    // if checkbox, checked is true creates remove button.
        const {checked} = e.target
    
    if (checked) {
       
        const buttonsContainer = document.createElement('div')
        buttonsContainer.setAttribute('class', 'items-buttons-container')
        // Creates element of div with classname of remove-btn
        const removeItemBtn = document.createElement('div')
        removeItemBtn.setAttribute('class','remove-btn btn')
        removeItemBtn.textContent = 'Remove item'

        // const editBtn = document.createElement('div')
        // editBtn.setAttribute('class','edit-btn btn')
        // editBtn.textContent = 'Edit'

        // buttonsContainer.append(editBtn, removeItemBtn)
        todoItem.append(removeItemBtn)

        // editBtn.addEventListener('click', (e) => edit(e, buttonsContainer))
        
        // adds eventlistener to  button created above 
        removeItemBtn.addEventListener('click', (e) =>{
            e.target.parentNode.remove()
        })
    }else {
        e.target.parentNode.nextSibling.remove()
    }

}


function sortingTodo(){
    // Objects of each element with the classname of todo-item
   const todoItems = document.querySelectorAll('.todo-item-input')
    
    // Initialze an array, will be used for pushing in text from the dom
   const arrayTodoitems = []

    //   Pushes textcontent from each element targetted in dom into array initialized above.
    todoItems.forEach(item => {
        arrayTodoitems.push(item.lastChild.textContent)
    })
    //  sorted array. String (Might use regex instead)
    const sortedArrayTodoitems = arrayTodoitems.sort((a,b) => a.localeCompare(b) )

     
    //  Sorted array,  new textcontent
    todoItems.forEach((el, index) => {
       el.lastChild.textContent = sortedArrayTodoitems[index]
        })
 

}

//  for future 

// function clearItems(app){
//     // if element is of classname todo-item and the checkbox in the element is checked, removes the element.
//    Array.from(app.children).forEach(item => {
//        if (item.getAttribute('class', 'todo-item') === 'todo-item' && item.children[1].checked) {
//            item.remove()
           

//        }
//    })

// }


// function edit(e, buttonsContainer){
    
//     const editInput = document.createElement('input')

//     editInput.setAttribute('type', 'text')
//     editInput.setAttribute('class', 'edit-input')

//     // buttonsContainer.append(editInput)

//     console.log(e.target.parentNode)



// }



