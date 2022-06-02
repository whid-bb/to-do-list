import * as globals from './globals.js';

class Ls {
  addToLS = (obj) => {
    localStorage.setItem(globals.LS_KEY, JSON.stringify(obj));
  };

  getFromLS = () => {
    const lsData = localStorage.getItem(globals.LS_KEY);
    if (lsData) {
      const data = JSON.parse(lsData);
      return data;
    }

    return [];
  };

  removeFromLS = (id) => {
    const data = this.getFromLS(globals.LS_KEY);
    data.filter((el, i) => {
      if (el.index === Number(id)) {
        data.splice(i, 1);
        this.addToLS(data);
      }
      return true;
    });
  };
}

export default Ls;