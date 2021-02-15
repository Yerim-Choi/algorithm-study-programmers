const solution = (bl, w, tw) => {
    const queue = [];
    let time = 0;
    let nowW = 0;
  
    // 다리를 건너야 하는 트럭과 건너는 트럭이 비었으면 종료.
    while (queue.length > 0 || tw.length > 0) {
      // 다리를 건너고 있는 트럭들의 시간을 조정
      for (let i = 0; i < queue.length; i++) {
        const cq = queue[i];
        // 만약 건너도 되는 시간이면 큐에서 제거
        if (++cq.time >= bl) {
          nowW -= cq.weight;
          queue.shift();
          i--;
        }
      }
      time++;
  
      const curW = tw[0] || 0;
      // 다리가 버틸 수 있는 무게를 초과할 경우 큐에서 빠질때까지 재귀
      if (curW + nowW > w) continue;
      nowW += curW;
  
      // 대기 상태의 트럭이 없더라도 건너는 중의 트럭이 있을 수 있으므로 재귀
      if (tw.length === 0) continue;
      queue.push({
        weight: curW,
        time: 0
      });
      tw.shift();
    }
  
    return time;
  };