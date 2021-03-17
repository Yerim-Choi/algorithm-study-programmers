function solution(n, words) {
    const len = words.length;
    let stack = {}; //object에 property로 저장
  
    //단어수(words) 만큼 loop
    for (let i = 0; i < len; i++) {
      const word = words[i];
      if (!stack[word]) {
        //단어가 없으면 property에 저장
        //최초 저장이 아닌 경우 && 마지막 문자로 단어를 말하지 않은 경우
        if (i > 0 && words[i - 1].charAt(words[i - 1].length - 1) !== word.charAt(0)) {
          return [(i % n) + 1, Math.ceil((i + 1) / n)]; //몇 번째 사람인지, 몇 번째 차례인지
        } else {
          stack[word] = word; //property에 저장
        }
      } else {
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
      }
    }
    //탈락자 없는 경우
    return [0, 0];
  }