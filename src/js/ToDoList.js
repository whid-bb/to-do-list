class ToDoList {
  list = []

  constructor({ listTag }) {
    this.listTag = document.getElementById(listTag);
  }

  renderList = () => {
    let html = `
    
    `;

    this.list.forEach((el) => {
      html += `
      <li>
      <div class="tdl-li-content">
        <div class="tdl-li-content-inner">
          <input type="checkbox" class="tdl-checkbox" ${el.completed ? 'checked' : ''}>
          <span class="list-desc">${el.desc}</span>
        </div>
        <span class="dragndrop-ico"></span>
      </div>
    </li>
      `;
    });

    this.listTag.insertAdjacentHTML('afterend', html);
  }

  init = () => {
    this.list.push(
      {
        index: '1',
        desc: 'First item',
        completed: 0,
      },
      {
        index: '2',
        desc: 'Second item',
        completed: 0,
      },
      {
        index: '3',
        desc: 'third item',
        completed: 1,
      },
      {
        index: '4',
        desc: 'fourth item',
        completed: 0,
      },
    );
    this.renderList();
  }
}

export default ToDoList;