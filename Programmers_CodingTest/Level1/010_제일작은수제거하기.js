function solution(arr) {
  var answer = [];

  if (arr.length === 1) {
    return (answer = [-1]);
  } else {
    let minNum = Math.min(...arr);
    arr.splice(arr.indexOf(minNum), 1);
    return arr;
  }
}