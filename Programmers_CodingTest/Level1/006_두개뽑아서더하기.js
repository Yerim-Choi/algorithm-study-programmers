function solution(numbers) {
    var answer = [];
    for ( var i = 0; i < numbers.length; i++) {
        for ( var j = 0; j < numbers.length; j++) {
            if ( i != j) {
                answer.push(numbers[i]+numbers[j])
            }
        }
    }

    const result = [ ...new Set(answer)]
    result.sort((a,b)=>{
      return a-b  
    })

    return result;
} 