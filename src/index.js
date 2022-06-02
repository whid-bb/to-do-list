import ToDoList from './js/ToDoList.js';

const ToDo = new ToDoList({
  listTag: '#add-task-li',
  form: {
    tag: '#add-task-li form',
    inputName: 'add-task',
  },
});

ToDo.init();