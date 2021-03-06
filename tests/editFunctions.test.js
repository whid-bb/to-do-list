/**
 * @jest-environment jsdom
 */
import RenderList from '../src/js/RenderList.js';
import RemoveItems from '../src/js/Remove.js';
import Complete from '../src/js/Complete.js';
import * as globals from '../src/js/globals.js';

const removeItem = new RemoveItems();
const complete = new Complete();
const renderTemplate = new RenderList('#add-task-li');

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
 <div id="clear-all">
      <button type="button">Clear all completed
      </button>
    </div>
   `;

  const list = [

  ];

  beforeEach(() => {
    renderTemplate.listTags = document.querySelector('#add-task-li');
    renderTemplate.list = list;
    renderTemplate.getFromLS = () => list;
    complete.RemoveItems = removeItem;
  });

  describe('Can edit task description?', () => {
    it('Allow edit', () => {
      const itemIndex = renderTemplate.renderOne('testing1');
      const getAddedItem = document.getElementById(`task-${itemIndex}`);
      const editableField = getAddedItem.querySelector('.list-desc');
      editableField.click();
      const inputEdit = getAddedItem.querySelectorAll('.list-desc-edit');

      expect(inputEdit).toHaveLength(1);
    });
    it('Allow save', () => {
      const itemIndex = renderTemplate.renderOne('testing3');
      const getAddedItem = document.getElementById(`task-${itemIndex}`);
      const editableField = getAddedItem.querySelector('.list-desc');
      editableField.click();
      const inputEdit = getAddedItem.querySelectorAll('.list-desc-edit');

      inputEdit[0].value = 'valueChanged';
      inputEdit[0].click();

      const LsTest = JSON.parse(localStorage.getItem(globals.LS_KEY));
      expect(LsTest[itemIndex].desc).toBe('valueChanged');
      expect(editableField).toBeTruthy();
    });
  });

  describe('Update completed status', () => {
    it('Status changing on checkbox click?', () => {
      const itemIndex = renderTemplate.renderOne('testing3');
      const getAddedItem = document.getElementById(`task-${itemIndex}`);

      const checkboxEl = getAddedItem.querySelector('.tdl-checkbox');

      checkboxEl.click();
      const LsTest = JSON.parse(localStorage.getItem(globals.LS_KEY));
      expect(LsTest[itemIndex].completed).toBe(true);

      checkboxEl.click();
      const LsTest2 = JSON.parse(localStorage.getItem(globals.LS_KEY));
      expect(LsTest2[itemIndex].completed).toBe(false);
    });
  });
  describe('Clear All Completed Tasks', () => {
    it('All completed deleted from DOM/LocalStorage?', () => {
      const itemOneIndex = renderTemplate.renderOne('testing7');
      renderTemplate.renderOne('testing8');
      const itemThreeIndex = renderTemplate.renderOne('testing9');

      const getFirstRender = document.getElementById(`task-${itemOneIndex}`);
      const getThirdRender = document.getElementById(`task-${itemThreeIndex}`);

      const checkboxFirst = getFirstRender.querySelector('.tdl-checkbox');
      const checkboxThird = getThirdRender.querySelector('.tdl-checkbox');

      checkboxFirst.click();
      checkboxThird.click();

      complete.clearCompleted(renderTemplate.list);
      const LsTest = JSON.parse(localStorage.getItem(globals.LS_KEY));
      const deletedElements = LsTest.filter((el) => {
        if (el.desc === 'testing7' || el.desc === 'testing9') {
          return el;
        }
        return null;
      });
      const existingElement = LsTest.filter((el) => {
        if (el.desc === 'testing8') {
          return el;
        }
        return null;
      });

      expect(deletedElements).toHaveLength(0);
      expect(existingElement).toHaveLength(1);
    });
  });
});
