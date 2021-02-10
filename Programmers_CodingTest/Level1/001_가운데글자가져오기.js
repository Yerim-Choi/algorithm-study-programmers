function solution(s) {
    var str = s;
    if(str.length % 2 == 0){
        var len = s.length;
        var x = s.substr(len/2-1,2);
        return x;
    }
    if(str.length % 2 ==1){
        var len = s.length;
        var x = s.substr(len/2,1);
        return x;

    }
    return x;
}