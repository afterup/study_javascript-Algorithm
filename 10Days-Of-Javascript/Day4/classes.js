class Polygon{
  constructor(lengths){
      this.lengths = lengths;
  }

  perimeter(){
      let result = 0;
      for(let i = 0; i<this.lengths.length; i++){
          result += this.lengths[i];
      }
      return result;
  } 
}

//다른사람 풀이
class Polygon{
  constructor(lengths){
      this.lengths = lengths;
  }

  perimeter() {
    return this.lengths.reduce((a, b) => a + b);
  }
}

/*
  arr.reduce(callback[, initialValue]);
  배열의 모든 값을 더해서 반환해주는 메소드
*/
