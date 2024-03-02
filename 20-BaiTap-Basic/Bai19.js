//CÂU 19: Tìm số chẵn đầu tiên trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
function arr(mang1, mang2) {
  let so_chan = -1;
  let mang = mang1.concat(mang2)
  for (let i = 0; i < mang.length; i++) {
  if ( mang[i]%2 ==0)  {
      so_chan = mang[i];
      break;
    }
  }
  return so_chan;
}
console.log(arr([10, 11, 12, 13, 14, 15] , [1, 3, 5, 7, 9] ));
