import Ls from './Ls.js';
import Complete from './Complete.js';
import RemoveItems from './Remove.js';

class ListItem extends Ls {
  list = [];

  Complete = new Complete();

  RemoveItems = new RemoveItems();

  dragIco;

  trashIco;

  toggleIcons = (cls, ...ico) => {
    ico.forEach((el) => {
      el.classList.toggle(cls);
    });
  };

  editListDesc = (element, list, elId) => {
    element.currentTarget.style.backgroundColor = 'unset';
    const descText = element.target.value;
    list.map((el) => {
      if (el.index === Number(elId)) {
        el.desc = descText;
      }
      return el;
    });

    element.target.parentNode.innerHTML = `<span class="list-desc">${descText}</span>`;
    this.addToLS(list);
    this.toggleIcons('hide', this.dragIco, this.trashIco);
  };

  edit = (e) => {
    const numId = e.currentTarget.id.replace('task-', '');

    this.dragIco = e.currentTarget.querySelector('.dragndrop-ico');
    this.trashIco = e.currentTarget.querySelector('.trash-ico');
    this.list = this.getFromLS();

    this.trashIco.currentParentEl = e.currentTarget;
    this.trashIco.currentParentId = numId;
    this.trashIco.addEventListener('click', (e) => {
      this.RemoveItems.removeItem(e.target);
    });
    if (e.target.classList.contains('list-desc')) {
      e.currentTarget.style.backgroundColor = '#ccc';
      const descText = e.target.innerText;
      e.target.parentNode.innerHTML = `<input type='text' class='list-desc-edit' value='${descText}'>
      <span class="edit-item-prompt">Click input to save</span>
      `;

      const tempInput = e.currentTarget.querySelector('.list-desc-edit');
      const endOfText = tempInput.value.length;
      tempInput.setSelectionRange(endOfText, endOfText);
      tempInput.focus();
      this.toggleIcons('hide', this.dragIco, this.trashIco);
    }

    if (e.target.classList.contains('list-desc-edit')) {
      this.editListDesc(e, this.list, numId);
    }
  };

  listItemEvent = (list, id) => {
    const listItem = document.querySelector(`#task-${id}.task-list-item`);
    listItem.addEventListener('click', this.edit);
    const checkbox = listItem.querySelector('.tdl-checkbox');
    checkbox.addEventListener('change', () => {
      this.Complete.taskComplete(listItem, id);
    });
  };

  listItemEvents = (list) => {
    const listItems = document.querySelectorAll('.task-list-item');

    listItems.forEach((el) => {
      el.toggleEv = 0;
      el.addEventListener('click', this.edit);
    });

    const checkbox = document.querySelectorAll('.tdl-checkbox');
    checkbox.forEach((el) => {
      el.addEventListener('change', (e) => {
        const parent = e.target.closest('.task-list-item');
        const id = parent.id.replace('task-', '');
        this.Complete.taskComplete(parent, id, list);
      });
    });
  };
}

export default ListItem;