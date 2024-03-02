//CÂU 3: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 +  ... + n^2
function sum(n) {
    let a = 0;
    for(let i = 1; i <= n; i++)
    {
      a = a + i*i;
    }
    return a;
  }
console.log(sum(2))
