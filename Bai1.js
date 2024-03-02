//CÂU 1: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n

function sum(n) {
    let a = 0;
    for(let i = 1; i <= n; i++)
    {
      a = i + a;
    }
    return a;
  }
console.log(sum(5));