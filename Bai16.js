//CÂU 16: Tìm số bé nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
function arr(mang) {
  let so_be_nhat = mang[0];
  for (let i = 0; i < mang.length; i++) {
  if (so_be_nhat > mang[i]) {
      so_be_nhat = mang[i];
    }
  }
  return so_be_nhat;
}
console.log(arr([10, 11, 12, 13, 14, 15]));
