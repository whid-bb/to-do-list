class Ls {
  constructor(lsKey) {
    this.lsKey = lsKey;
  }

  addToLS = (obj) => {
    localStorage.setItem(this.lsKey, JSON.stringify(obj));
  };

  getFromLS = () => {
    const lsData = localStorage.getItem(this.lsKey);
    if (lsData) {
      const data = JSON.parse(lsData);
      return data;
    }

    return [];
  };

  removeFromLS = (id) => {
    const data = this.getFromLS(this.lsKey);
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