import Ls from './Ls.js';
import * as globals from './globals.js';
import RemoveItems from './Remove.js';

class Complete {
  Ls = new Ls();

  RemoveItems = new RemoveItems();

  clearCompleted = () => {
    const completed = document.querySelectorAll(`.${globals.TASK_LIST_COMPLETED}`);
    completed.forEach((el) => {
      this.RemoveItems.removeItem(el);
    });
  };

  taskComplete = (parent, id) => {
    const list = this.Ls.getFromLS();
    list.map((el) => {
      if (Number(id) === el.index) {
        if (el.completed === 1) {
          parent.classList.remove(globals.TASK_LIST_COMPLETED);
          el.completed = 0;
        } else {
          parent.classList.add(globals.TASK_LIST_COMPLETED);
          el.completed = 1;
        }
      }
      return el;
    });
    this.Ls.addToLS(list);
  };
}

export default Complete;