import Ls from './Ls.js';

class ListItem extends Ls {
  list = [];

  recalculateIndexes = () => {
    const listItems = [...document.querySelectorAll('.task-list-item')];

    const listReverse = listItems.reverse();

    for (let i = 0; i <= this.list.length - 1; i += 1) {
      const el = this.list;

      el[i].index = i;
      listReverse[i].id = `task-${i}`;
    }

    this.addToLS(this.list);
  };

  removeItem = (e) => {
    const parent = e.target.currentParentEl;
    const id = e.target.currentParentId;

    this.list.splice(id, 1);

    parent.remove();
    this.recalculateIndexes();
  };

  toggleIcons = (cls, ...ico) => {
    ico.forEach((el) => {
      el.classList.toggle(cls);
    });
  };

  edit = (e) => {
    const numId = e.currentTarget.id.replace('task-', '');

    const dragIco = e.currentTarget.querySelector('.dragndrop-ico');
    const trashIco = e.currentTarget.querySelector('.trash-ico');

    trashIco.currentParentEl = e.currentTarget;
    trashIco.currentParentId = numId;
    trashIco.addEventListener('click', this.removeItem);

    if (e.target.classList.contains('list-desc')) {
      e.currentTarget.style.backgroundColor = '#ccc';
      const descText = e.target.innerText;
      e.target.outerHTML = `<input type='text' class='list-desc-edit' value='${descText}'>`;

      const tempInput = e.currentTarget.querySelector('.list-desc-edit');
      const endOfText = tempInput.value.length;
      tempInput.setSelectionRange(endOfText, endOfText);
      tempInput.focus();
      this.toggleIcons('hide', dragIco, trashIco);
    }
    if (e.target.classList.contains('list-desc-edit')) {
      e.currentTarget.style.backgroundColor = 'unset';
      const descText = e.target.value;
      this.list.map((el) => {
        if (el.index === Number(numId)) {
          el.desc = descText;
        }
        return el;
      });
      e.target.outerHTML = `<span class="list-desc">${descText}</span>`;
      this.addToLS(this.list);
      this.toggleIcons('hide', dragIco, trashIco);
    }
  };

  listItemEvents = (list, one = false) => {
    this.list = list;
    let listItems = document.querySelectorAll('.task-list-item');
    if (one) {
      listItems = [document.querySelector('.task-list-item')];
    }

    listItems.forEach((el) => {
      el.toggleEv = 0;
      el.addEventListener('click', this.edit);
    });
  };
}

export default ListItem;