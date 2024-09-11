const filterAndSortEvenNumbers = (arr) => {
  const newArr = arr.sort().filter((a) => a % 2 == 0);
  return newArr;
};
