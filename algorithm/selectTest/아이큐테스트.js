// # 4. 아이큐 테스트

// 홀수 또는 짝수중에 하나만 존재하는 값의 순번을 출력하는 함수를 작성해주세요.


const IQTest = (numbers) => {
  let evenList = [], oddList = [];
  const numbersArray = numbers.split(' ').map(Number);
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evenList.push(numbersArray[i]);
    } else {
      oddList.push(numbersArray[i]);
    }
  }
  let uniqueNumber;
  if (evenList.length === 1) {
    uniqueNumber = evenList[0];
  } else {
    uniqueNumber = oddList[0];
  }
  return numbersArray.indexOf(uniqueNumber) + 1;
}

// **예시**

// - ex) "2 4 7 8 10" ⇒ 3 # 7만 홀수
// - ex) "1 2 1 1" ⇒ 2 # 2만 짝수

// **주의할점**

// - 순번의 시작은 0이 아니라 1입니다.