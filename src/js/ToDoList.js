import RenderList from './RenderList.js';

class ToDoList {
  list = [];

  constructor({ listTag, form: { tag, inputName } }) {
    const listKey = 'toDoList';
    this.form = { tag, inputName };
    this.RenderList = new RenderList({
      listTag: document.querySelector(listTag),
      listKey,
    });
  }

  parseForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputData = formData.get(this.form.inputName);
    if (inputData.trim().length > 0) {
      this.RenderList.render(inputData);
    }
    event.target.reset();
  };

  init = () => {
    const formEl = document.querySelector(this.form.tag);

    this.RenderList.render();
    formEl.addEventListener('submit', this.parseForm);
  };
}

export default ToDoList;