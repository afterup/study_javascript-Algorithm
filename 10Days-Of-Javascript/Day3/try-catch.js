//Day 3: Try, Catch, and Finally

/*
  이외의 에러 종류로는 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError가 있음.
  try문 안에서 예외를 발생시키고 싶다면 throw를 사용하여 catch로 잡아주면 된다.
*/
function reverseString(s) {
  try{
      console.log(s.split('').reverse().join('')); 
  }catch(err){
      if(err instanceof TypeError){
          console.log(err.message);
          console.log(s);
      }
  }
}
