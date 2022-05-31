class Ls {
  constructor(lsKey) {
    this.lsKey = lsKey;
  }

  addToLS = (obj) => {
    localStorage.setItem(this.lsKey, JSON.stringify(obj));
  };

  getFromLS = (key) => {
    const lsData = localStorage.getItem(key);
    if (lsData) {
      const data = JSON.parse(lsData);
      return data;
    }

    return [];
  };

  removeFromLS = (id) => {
    const data = this.getFromLS(this.lsKey);
    data.filter((el, i) => {
      if (el.id === Number(id)) {
        data.splice(i, 1);
        this.addToLS(data);
      }
      return true;
    });
  };
}

export default Ls;