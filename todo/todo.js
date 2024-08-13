/* 

let cont = document.querySelector('div');
let inp = document.querySelector('#task');
let btn = document.querySelector('#addTask');

btn.addEventListener('click', () => {
    // getting text from input
    let taskText = inp.value.trim();
  
    // only works if input field not empty
    if (taskText) {
      // creating new div element with class taskContainer
      let taskContainer = document.createElement('div');
      taskContainer.className = 'taskContainer';
  
      // creating p element and adding task text
      let taskPara = document.createElement('p');
      taskPara.textContent = taskText;
  
      // creating x button to delete task
      let delBtn = document.createElement('button');
      delBtn.textContent = 'x';
      
      delBtn.addEventListener('click', () => {
        taskContainer.remove();
      });
  
      // appending p and button to task container
      taskContainer.appendChild(taskPara);
      taskContainer.appendChild(delBtn);
  
      // appending task container to main container
      cont.appendChild(taskContainer);
  
      // clearing input field
      inp.value = '';
    }
  });

  */

  let cont = document.querySelector('div');
  let inp = document.querySelector('#task');
  let btn = document.querySelector('#addTask');
  
  // Function to save tasks to local storage
  function saveTasks() {
    let tasks = [];
    document.querySelectorAll('.taskContainer p').forEach(taskPara => {
      tasks.push(taskPara.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Function to load tasks from local storage
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach(taskText => {
        createTask(taskText);
      });
    }
  }
  
  // Function to create a new task element
  function createTask(taskText) {
    let taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer';
  
    let taskPara = document.createElement('p');
    taskPara.textContent = taskText;
  
    let delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    
    delBtn.addEventListener('click', () => {
      taskContainer.remove();
      saveTasks(); // Update local storage after removing a task
    });
  
    taskContainer.appendChild(taskPara);
    taskContainer.appendChild(delBtn);
  
    cont.appendChild(taskContainer);
  }
  
  // Load tasks from local storage on page load
  loadTasks();
  
  btn.addEventListener('click', () => {
    let taskText = inp.value.trim();
    if (taskText) {
      createTask(taskText);
      saveTasks(); // Save tasks to local storage
      inp.value = '';
    }
  });
  
  