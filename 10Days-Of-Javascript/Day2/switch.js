//Day 2: Conditional Statements: Switch

//나의 풀이
function getLetter(s) {
  let letter;
  const firstCharCode = s[0].charCodeAt(0)-97;

  const vowels = [0,4,8,14,20]; 

  if(vowels.includes(firstCharCode)){
      letter = 'A';
  }else if(1<= firstCharCode && firstCharCode  <=6){
      letter = 'B'
  }else if(7<= firstCharCode && firstCharCode <=12){
      letter = 'C';
  }else if(13<= firstCharCode && firstCharCode <=25) {
      letter = 'D';
  }

  return letter;
}

/* 
  스위치 문제이지만 여러개의 케이스를 등록할 경우
  case 0: case 1: case 2: ... 이런식은 비효율적이지 않을까 하여서 if else를 사용하였고,
  알파벳을 숫자로 변환하여 대소비교를 하였다.
  그결과 가독성만 떨어뜨렸다...
*/

// 다른 사람의 풀이
function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
      case 'aeiou'.includes(s[0]):
          letter = 'A';
          break;
      case 'bcdfg'.includes(s[0]):
          letter = 'B';
          break;
      case 'hjklm'.includes(s[0]):
          letter = 'C';
          break;
      case 'npqrstvwxyz'.includes(s[0]):
          letter = 'D';
          break;
  }
  return letter;
}
/*
  String 또한 문자의 배열로 이루어진 점을 간과하였기에 생각하지 못한 풀이.
  문자열에도 includes를 사용하여 문자를 비교한 점이 인상적이다. 
*/