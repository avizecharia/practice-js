const filterAndSortEvenNumbers = (arr) => {
  const newArr = arr.sort().filter((a) => a % 2 == 0);
  return newArr;
};
const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};
