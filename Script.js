/* take a input from the user and make a list
   Create Tick for created list
   Filter the list tick or untick means completed or not
*/

// let Inputlist

// const inputstore = (text) => {
//     const Inputlist = document.getElementById('todolist').value;
//     const storeInput = Inputlist
//     console.log('storeInput')
// }

const createListItem = (todoValue) => {
    const todo = document.createElement('li')
    todo.appendChild(document.createTextNode(todoValue))
    return todo
  }
  
  const addToList = () => {
    const taskInputElement = document.getElementById('taskInput')
    const todoValue = taskInputElement.value
    
    const todoList = document.getElementById('todos')
  
    const todo = createListItem(todoValue)
  
    todoList.appendChild(todo);  
  }
  
  const addTask = (event) => {
    if (event.key === 'Enter') {
      // add to the list
      addToList()
    }
  }