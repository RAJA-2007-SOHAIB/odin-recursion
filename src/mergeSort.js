const mergeSort = function (anArray) {
  if (!anArray || anArray.length <= 1) return anArray || [];

  const mid = Math.floor(anArray.length / 2);
  const left = mergeSort(anArray.slice(0, mid));
  const right = mergeSort(anArray.slice(mid));

  return mergeArray(left, right, left.length, right.length);
};

const mergeArray = function (
  leftHalf,
  rightHalf,
  leftHalfLength,
  rightHalfLength
) {
  let i = 0,
    j = 0;

  let sorted = [];
  while (i < leftHalfLength && j < rightHalfLength) {
    if (leftHalf[i] < rightHalf[j]) {
      sorted.push(leftHalf[i++]);
    } else {
      sorted.push(rightHalf[j++]);
    }
  }
  for (; i < leftHalfLength; i++) {
    sorted.push(leftHalf[i]);
  }
  for (; j < rightHalfLength; j++) {
    sorted.push(rightHalf[j]);
  }

  return sorted;
};

console.log(mergeSort([2, 31, 33, 4, 9, 6, 9, 1]));
