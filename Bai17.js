//CÂU 17: Tính tổng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
function arr(mang) {
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
  if ( mang[i] < 0)  {
      tong += mang[i];
    }
  }
  return tong;
}
console.log(arr([10, 11, 12, -10, -11, -12]));
