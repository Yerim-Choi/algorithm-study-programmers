function solution(n) {
    let answer = n + 1;

    while (true) {
        const onesOfN = n.toString(2).split("").filter(v => v === "1").length;
        const onesOfAnswer = answer.toString(2).split("").filter(v => v === "1").length;

        if (onesOfN === onesOfAnswer) {
            break;
        }
        answer++;
    }
    return answer;
}