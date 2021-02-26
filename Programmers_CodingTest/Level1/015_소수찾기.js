function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) arr.push(i);
    
    for(let i = 1; i*i <n; i++) {
        if(arr[i]) {
            let num = arr[i];
            for(let j = num * num; j <= n; j += num){
                arr[j - 1] = 0;
            }
        }
    }
    
    let answer = arr.filter((number) => number );
    answer.shift();
    
    return answer.length;
    
}