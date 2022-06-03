import RenderList from './RenderList.js';
import Ls from './Ls.js';
import Complete from './Complete.js';

class ToDoList {
  list = [];

  Ls = new Ls();

  Complete = new Complete();

  constructor({ listTag, form: { tag, inputName } }) {
    this.form = { tag, inputName };

    this.RenderList = new RenderList({
      listTag: document.querySelector(listTag),
    });
  }

  parseForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputData = formData.get(this.form.inputName);
    if (inputData.trim().length > 0) {
      this.RenderList.renderOne(inputData);
    }
    event.target.reset();
  };

  init = () => {
    const formEl = document.querySelector(this.form.tag);

    this.RenderList.renderMany();
    formEl.addEventListener('submit', this.parseForm);

    const clearBtn = document.querySelector('#clear-all button');

    clearBtn.addEventListener('click', () => {
      const list = this.Ls.getFromLS();
      this.Complete.clearCompleted(list);
    });
  };
}

export default ToDoList;