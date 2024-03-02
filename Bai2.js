//CÂU 2: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
function sum(n) {
    let a = 0;
    for(let i = 1; i <= n; i++)
    {
      a = a + 1/i;
    }
    return a;
  }
console.log(sum(2));
