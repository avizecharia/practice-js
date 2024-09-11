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
