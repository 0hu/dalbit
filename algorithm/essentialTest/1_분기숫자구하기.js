// # 분기 숫자 구하기

// 1~12월중에 숫자를 입력받고 1분기, 2분기, 3분기, 4분기를 리턴하는 함수를 작성해주세요.

const getQuarter = (month) => {
  if (month < 1 || month > 12) {
    throw new Error("잘못 된 입력입니다. 1월 부터 12월 까지 입력해주세요");
  }

  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
}