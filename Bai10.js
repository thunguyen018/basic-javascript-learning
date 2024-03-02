// CÂU 10: Viết chương trình in ra tam giác cân có chiều cao = h.

function pyramid(N) {
  let result = "";
  for (let i = 1; i <= N; i++) {
    for (j = N; j > i; j--) {
      result += " ";
    }
    for (j = 1; j <= i; j++) {
      result += "*" + " ";
    }
    result += "\n";
  }
  return result;
}
console.log(pyramid(3));
