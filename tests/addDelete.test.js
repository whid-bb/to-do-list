/**
 * @jest-environment jsdom
 */
import RenderList from '../src/js/RenderList.js';
import Ls from '../src/js/Ls.js';
import RemoveItems from '../src/js/Remove.js';
import * as globals from '../src/js/globals.js';

const removeItem = new RemoveItems();
const renderTemplate = new RenderList('#add-task-li');
const locStorage = new Ls();

describe('add remove functionality', () => {
  document.body.innerHTML = `
  <ul id="todo_list">
  <li id="add-task-li">
    <form>
      <input type="text" name="add-task" id="add-task" placeholder="Add to your list...">
      <button type="submit" id="add-task-btn">

      </button>
    </form>
  </li>
</ul>
  `;

  const testObj = {
    index: 0,
    desc: 'testing',
    completed: false,
  };

  beforeEach(() => {
    renderTemplate.listTags = document.querySelector('#add-task-li');
    removeItem.list = testObj;
  });

  describe('add/delete one element to DOM/LocalStorage', () => {
    it('Add one element to DOM', () => {
      renderTemplate.renderTemplate(testObj);
      const elemId = document.querySelectorAll(`#task-${testObj.index}`);

      expect(elemId).toHaveLength(1);
    });
    it('Remove element from DOM/LocalStorage', () => {
      removeItem.list = testObj;
      const removeBtn = document.querySelectorAll('.trash-ico')[0];
      removeItem.removeItem(removeBtn);
      const removedEl = document.querySelectorAll(`task-${testObj.index}`);

      expect(removedEl).toHaveLength(0);
      expect(locStorage.getFromLS()).toHaveLength(0);
    });

    it('Add one element to LocalStorage', () => {
      locStorage.addToLS(testObj);

      expect(localStorage.getItem(globals.LS_KEY)).toBe(JSON.stringify(testObj));
    });
  });
});
