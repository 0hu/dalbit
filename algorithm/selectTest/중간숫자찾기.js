const findMiddle = (inputArr) => {
  let firstMax = -Infinity, secondMax = -Infinity, pos = -1;
  for (let i = 0; i < inputArr.length; i++) {
    const num = inputArr[i];
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
      pos = i;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return pos;
}