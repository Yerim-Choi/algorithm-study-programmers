function solution(phone_number) {
    return phone_number
      .split("")
      .map((number, index) => {
        if (index <= phone_number.length - 5) return "*";
        return number;
      })
      .join("");
  }