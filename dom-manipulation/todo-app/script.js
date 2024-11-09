

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


    //create a task

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    newTask.appendChild(taskContent);
    //create edit button

    const editButton  = document.createElement('button');
    editButton.textContent = 'Edit';

    newTask.appendChild(editButton);

    //create a delete button for the task

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete');

    // deleteButton.className = 'delete'


  



    
    //append delete button to the list item

    // newTask.append()

    newTask.appendChild(deleteButton);

    console.log('newTask', newTask)


    //append the list item to the task list
    taskList.appendChild(newTask);

    //clear the input field after adding the task
    taskInput.value = '';

    //add a event for edit button

    editButton.addEventListener('click', function(){

        //when the edit is clicked, make the task editable

        const currentText = taskContent.textContent;
        console.log('newTask',newTask)

        console.log('currentText',currentText)

        const inputField = document.createElement('input');

        inputField.type = 'text';
        inputField.value = currentText;



        // inputField.setAttribute('type', 'text');
        console.log('newTask',newTask)
        // newTask.replaceChild(inputField, taskContent);
        newTask.insertBefore(inputField, taskContent);
        taskContent.style.display = 'none';


        //create a save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        newTask.appendChild(saveButton);

       
        saveButton.addEventListener('click', function(){

            const updatedText = inputField.value.trim();

            if(updatedText !== ""){
                taskContent.textContent = updatedText;
                taskContent.style.display = 'inline';
                inputField.remove();
                saveButton.remove();
            }
        })

    })


    //add and event listener to the delete button

    //closures allows this event handler to remember newTask
    //this event listener is defined isndie the scope where newTask is created
    deleteButton.addEventListener('click', function(){
        //delete a task
        taskList.removeChild(newTask);

    })

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



