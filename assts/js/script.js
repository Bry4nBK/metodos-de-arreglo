// JavaScript para la funcionalidad de la lista de tareas
document.addEventListener('DOMContentLoaded', function () {
    const newTask = document.getElementById('newTask');
    const taskInput = document.getElementById('task');
    const todoList = document.getElementById('todoList');
    const total = document.getElementById('total');
    const realizadas = document.getElementById('realizadas');
  
    let taskIdCounter = 0;
  
    newTask.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const task = taskInput.value.trim();
      if (task !== '') {
        taskIdCounter++;
  
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <span>${task}</span>
          <button class="completeBtn">Completar</button>
          <button class="deleteBtn">Eliminar</button>
        `;
        taskItem.dataset.id = taskIdCounter;
        todoList.appendChild(taskItem);
  
        taskInput.value = '';
        updateCounters();
      }
    });
  
    todoList.addEventListener('click', function (event) {
      if (event.target.classList.contains('completeBtn')) {
        const taskItem = event.target.closest('li');
        taskItem.classList.toggle('completed');
        updateCounters();
      } else if (event.target.classList.contains('deleteBtn')) {
        const taskItem = event.target.closest('li');
        taskItem.remove();
        updateCounters();
      }
    });
  
    function updateCounters() {
      const totalTaskCount = todoList.children.length;
      const completedTaskCount = document.querySelectorAll('.completed').length;
  
      total.textContent = totalTaskCount;
      realizadas.textContent = completedTaskCount;
    }
  });
  
  