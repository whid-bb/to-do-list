import ListItem from './ListItem.js';
import Ls from './Ls.js';

class RenderList extends Ls {
  list = [];

  taskListItem = 'task-list-item';

  taskListCompleted = 'task-list-completed';

  constructor({ listTag, listKey }) {
    super(listKey);
    this.listTag = listTag;
    this.ListItem = new ListItem(listKey);
  }

  renderTemplate = (obj) => {
    const checkBoxCls = 'tdl-checkbox';
    const html = `
    <li id="task-${obj.index}" class="${this.taskListItem}${obj.completed ? ` ${this.taskListCompleted}` : ''}">
    <div class="tdl-li-content">
      <div class="tdl-li-content-inner">
        <input type="checkbox" class="${checkBoxCls}" ${obj.completed ? 'checked' : ''}>
        <span class="list-desc" contenteditable="false">${obj.desc}</span>
      </div>
      <span class="dragndrop-ico"></span>
      <span class="trash-ico hide"></span>
    </div>
    </li>
    `;
    this.listTag.insertAdjacentHTML('afterend', html);
  };

  render = (one = null) => {
    this.list = this.getFromLS();
    const { list } = this;
    if (one) {
      list.push({
        index: list.length,
        desc: one,
        completed: 0,
      });
      this.addToLS(list);
      this.renderTemplate(list.at(-1), list);
      this.ListItem.listItemEvents(this.list, 'one');
      return;
    }
    if (list.length === 0) return;
    list.forEach((el) => {
      this.renderTemplate(el, list);
    });

    this.ListItem.listItemEvents(this.list);
  };
}

export default RenderList;