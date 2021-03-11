function solution(number, k) {
    let answer = '';
    let cnt = 0;
    let arr = [];
    
    for(let i=0; i<number.length; i++){
    
        while(arr.length != 0){
        
            if(cnt == k) break;
            
            if(arr[arr.length-1] < number[i]){
                ++cnt;
                arr.pop();
            }else break;
        }
        
        arr.push(number[i]);
    }
    
    answer = arr.join("").substr(0, number.length-k);;
    return answer;
}
