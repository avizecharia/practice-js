const filterAndSortEvenNumbers = (arr) => {
  const newArr = arr.sort().filter((a) => a % 2 == 0);
  return newArr;
};
const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};
const capitalizeFirstLetter = (str) => {
  const a = str.split(" ");
  return a.map((x) =>
    x[x.length - 1] != "." ? x[0].toUpperCase() + x.slice(1) : x
  );
};
const ListObjecat = [{ theid: 0 }];

const loadTasks = () => {
  return localStorage.getItem("listObj");
};
const saveTasks = () => {
  window.localStorage.setItem("listObj", JSON.stringify(ListObjecat));
};
const addTask = (task) => {
  const newObj = { id: ListObjecat[0].theid + 1, task };
  ListObjecat[0].theid += 1;
  ListObjecat.push(newObj);
  saveTasks();
};
const removeTask = (id) => {
  for (let i = 0; i < ListObjecat.length; i++) {
    if (ListObjecat[i].id == id) {
      ListObjecat.splice(i, 1);
    }
  }
  saveTasks();
};
