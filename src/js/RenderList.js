import ListItem from './ListItem.js';
import Ls from './Ls.js';
import * as globals from './globals.js';

class RenderList extends Ls {
  list = [];

  taskListItem = 'task-list-item';

  constructor({ listTag }) {
    super();
    this.listTags = listTag;

    this.ListItem = new ListItem();
  }

  renderTemplate = (obj) => {
    const checkBoxCls = 'tdl-checkbox';
    const html = `
    <li id="task-${obj.index}" class="${this.taskListItem}${obj.completed ? ` ${globals.TASK_LIST_COMPLETED}` : ''}">
    <div class="tdl-li-content">
      <div class="tdl-li-content-inner">
        <input type="checkbox" class="${checkBoxCls}" ${obj.completed ? 'checked' : ''}>
        <div class="list-desc-container">
        <span class="list-desc" contenteditable="false">${obj.desc}</span>
        </div>
      </div>
      <span class="dragndrop-ico"></span>
      <span class="trash-ico hide"></span>
    </div>
    </li>
    `;
    this.listTags.insertAdjacentHTML('afterend', html);
  };

  renderOne = (text) => {
    this.list = this.getFromLS();
    const newId = this.list.length;
    this.list.push({
      index: newId,
      desc: text,
      completed: false,
    });
    this.addToLS(this.list);
    this.renderTemplate(this.list[this.list.length - 1]);

    const lastInsertId = this.list[this.list.length - 1].index;
    this.ListItem.listItemEvent(this.list, lastInsertId);

    return newId;
  };

  renderMany = () => {
    this.list = this.getFromLS();
    const { list } = this;
    if (list.length === 0) return;
    list.forEach((el) => {
      this.renderTemplate(el);
    });
    this.ListItem.listItemEvents(this.list);
  };
}

export default RenderList;