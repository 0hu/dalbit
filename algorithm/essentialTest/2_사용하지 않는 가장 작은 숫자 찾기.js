// # 사용하지 않는 가장 작은 숫자 찾기

// 0부터 시작하는 양수(+)인 ID가 있습니다. 여러 ID를 보고 사용하지 않는 가장 작은 숫자를 찾는 함수를 작성해주세요.

const findMinNumber = (nums) => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1;
    }
  }

  if (nums[0] !== 0) {
    return 0;
  }

  return nums[ids.length - 1] + 1;
};