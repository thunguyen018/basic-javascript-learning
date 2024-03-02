//CÂU 4: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3
function sum(n) {
    let a = 0;
    for(let i = 1; i <= n; i++)
    {
      a = a + i*i*i;
    }
    return a;
  }
console.log(sum(2))


