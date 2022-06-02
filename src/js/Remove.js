import Ls from './Ls.js';

class RemoveItems extends Ls {
  list = this.getFromLS();

  recalculateIndexes = () => {
    const listItems = [...document.querySelectorAll('.task-list-item')];

    const listReverse = listItems.reverse();

    for (let i = 0; i <= listReverse.length - 1; i += 1) {
      this.list[i].index = i;
      listReverse[i].id = `task-${i}`;
    }

    this.addToLS(this.list);
  };

  removeItem = (e) => {
    const parent = e.closest('.task-list-item');
    const id = Number(parent.id.replace('task-', ''));

    this.list.splice(id, 1);

    parent.remove();
    this.recalculateIndexes();
  };
}

export default RemoveItems;