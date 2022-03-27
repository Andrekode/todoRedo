
renderApp()





function renderApp(){
    
    //  ref to DOM body
    const body = document.body

    // creates element of div with classname app  appends to body 
    const app = document.createElement('div')
    app.setAttribute('class', 'app')
    body.appendChild(app)


    // ------- input / button -------
    
    // Creates element of input with classname of app-input
    const appInput = document.createElement('input')
    appInput.setAttribute('class', 'app-input')
    
    // Creates element of div with classname of add-btn (div will be styled as a button)
    const addBtn = document.createElement('div')
    addBtn.setAttribute('class', 'app-add-btn btn')

    
    // Sets text to div aka button
    addBtn.textContent = 'Add'

    const sortBtn = document.createElement('div')
    sortBtn.setAttribute('class', 'sort-btn btn')
    sortBtn.textContent = 'Sort'

    const clearAllBtn = document.createElement('div')
    clearAllBtn.setAttribute('class', 'clearall-btn btn')
    clearAllBtn.textContent = 'Remove all'



    //  Appends input and button to app div
    app.append(appInput, addBtn, sortBtn, clearAllBtn)


    // ------- event input / buttons -------

    //  listens for event on button and runs function handleAppInput
    addBtn.addEventListener('click', () =>{handleAppInput(appInput, app)})
            
        
    
    // Listens for keypress 'Enter' in input and runs function handleAppInput
    appInput.addEventListener('keydown', (e) =>{
        if (e.key === 'Enter') {
            handleAppInput(appInput, app)
        }
    
    })

    sortBtn.addEventListener('click', () => {sortingTodo()})

    clearAllBtn.addEventListener('click', () => {clearItems(app)})

    
}




function handleAppInput(appInput, app){

    // Checks if there is input then if there is input it creates elements with said input
    if (appInput.value){
        
        
        // Creates a div with classname todo-item
        const todoItem =  document.createElement('div')
        todoItem.setAttribute('class', 'todo-item')
        

        // Creates a p element with classname of todo-task and sets the text of p to input of user
        const pElement = document.createElement('p')
        pElement.setAttribute('class', 'todo-task')
        pElement.textContent = appInput.value

        // Creates checkbox 
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('class', 'checkbox' )
        //  Adds eventlistener to checkbox runs function renderRemoveBtn
        checkBox.addEventListener('click', (e) => {renderRemoveBtn(e,todoItem)})
       
        // Appends p element and checkbox to div with classname todo-item
        todoItem.append(pElement, checkBox)

        // appends the above todoItem to body
        app.appendChild(todoItem)

        //  simple reset of input once above is done.
        appInput.value = null

    }else {
        console.log(appInput.value)
    }
}




function renderRemoveBtn(e, todoItem){
    if (e.target.checked) {
        const removeItemBtn = document.createElement('div')
        removeItemBtn.setAttribute('class','remove-btn btn')
        removeItemBtn.textContent = 'Remove'
        todoItem.appendChild(removeItemBtn)
        removeItemBtn.addEventListener('click', (e) =>{
            e.target.parentNode.remove()
        })
    }else {
        e.target.nextElementSibling.remove()
    }

}


function sortingTodo(){
   const todoItems = document.querySelectorAll('.todo-item')

   const arrayTodoitems = []

    todoItems.forEach(item => {
        arrayTodoitems.push(item.firstChild.textContent)
    })
     arrayTodoitems.sort((a,b) => a.localeCompare(b))

     todoItems.forEach((el, index) => {
        el.firstChild.textContent = arrayTodoitems[index]
        })
 

}

function clearItems(app){
   Array.from(app.children).forEach(item => {
       if (item.getAttribute('class', 'todo-item') === 'todo-item') {
           item.remove()

       }
   })
    

 
}





