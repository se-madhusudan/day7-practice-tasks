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
  