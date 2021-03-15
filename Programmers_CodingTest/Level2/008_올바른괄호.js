function solution(s){
    var answer = true;
    let left = 0;
    let right = 0;
    for(let i=0; i< s.length  ; i++){
        if(s[i]==="("){
            left++;
        }
        if(s[i]===")"){
            right++;
        }
        if(right > left ){
            return false;
        }
    }
    if(left!==right){
        return false;
    }
    return true;
}