

//get the necessary DOM elements


//variables
const taskInput = getElement('taskInput');
const addButton = getElement('addButton');
const taskList = getElement('taskList');





//events

addButton.addEventListener('click', function(){


   const taskText =  taskInput.value.trim();

   if(taskText !== ''){

    //create a new list item (task)
    
    const newTask = document.createElement('li');


    newTask.textContent = taskText;


    //create a delete button for the task

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete');

    // deleteButton.className = 'delete'


    //add and event listener to the delete button

    //closures allows this event handler to remember newTask
    //this event listener is defined isndie the scope where newTask is created
    deleteButton.addEventListener('click', function(){
        //delete a task

        alert('del button clicked')

      
        taskList.removeChild(newTask);

        console.log('newTask',newTask)
        console.log('taskList',taskList)
    })



    
    //append delete button to the list item

    // newTask.append()

    newTask.appendChild(deleteButton);

    console.log('newTask', newTask)


    //append the list item to the task list
    taskList.appendChild(newTask);

    //clear the input field after adding the task
    taskInput.value = '';

   }else{
    alert('Please enter a task');
   }
})

taskInput.addEventListener('keydown', function(e){
    console.log('event', e.key)

    if(e.key === 'Enter'){
        addButton.click();
    }
})




//functions


function getElement(id){
    return document.getElementById(id);
}



