//Day 2: Conditional Statements: If-Else

function getGrade(score) {
  let grade;
  if(0<=score && score<=5){
      grade = "F";
  }else if(score<=10){
      grade = "E";
  }else if(score<=15){
      grade = "D";
  }else if(score<=20){
      grade = "C";
  }else if(score<=25){
      grade = "B";
  }else{
      grade = "A";
  }
  
  return grade;
}

// 다른사람의 풀이
function getGrade(score) {
  return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}
/*
score가 5의 배수로 등급이 매겨지기에 점수에 5를 나누어 몇배수인지 계산.
배열의 순서이기에 점수에 -1을 해주고 5를 나눈 후 값을 정수로 변환하여 문자열에서 값을 얻는다.
*/