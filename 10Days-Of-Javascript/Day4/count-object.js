//Day 4: Count Objects

function getCount(objects) {
  let answer = 0;

  for(let i = 0; i < objects.length; i ++){
      if(objects[i].x === objects[i].y){
          answer++;
      }
  }
  return answer;
}

//다른사람 풀이
function getCount(objects) {
  return objects.filter(function(o){return o.x==o.y}).length
}
