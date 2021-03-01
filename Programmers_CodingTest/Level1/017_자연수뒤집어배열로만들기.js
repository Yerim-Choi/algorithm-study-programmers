function solution(n) {
    let answer = [];
  
    answer = String(n)
      .split("")
      .reverse()
      .map((v) => parseInt(v));
  
    return answer;
  }