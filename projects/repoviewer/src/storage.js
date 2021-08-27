// storage: object that handles reading/writing data from/to localStorage
const storage = {
  // read: loads data from localStorage
  read: (key) => (key && localStorage[key] ? JSON.parse(localStorage.getItem(key)) : null),
  
  // write: saves data to localStorage
  write: (key, ...data) => {
    if (key) {
      if (!localStorage[key]) {
        localStorage.setItem(key, JSON.stringify(data));
      } else {
        const savedData = JSON.parse(localStorage.getItem(key));
        const filteredData = data.filter((e) => !savedData.includes(e));
        localStorage.setItem(key, JSON.stringify([...savedData, ...filteredData]));
      }
    }
  },

  // erase: removes data from localStorage
  erase: (key, ...data) => {
    if (key && localStorage[key]) {
      const savedData = JSON.parse(localStorage.getItem(key));
      const filteredData = savedData.filter((e) => !data.includes(e));
      localStorage.setItem(key, JSON.stringify([filteredData]));
    }
  },

  // clear: erases all stored data from localStorage
  clear: (key) => localStorage.removeItem(key),
};

export { storage as default };