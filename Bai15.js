//CÂU 15: Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
function arr(mang) {
  let so_lon_nhat = 0;
  for( let i = 0; i < mang.length ; i++){
   if ( so_lon_nhat < mang[i]){
    so_lon_nhat = mang[i];
   }
  }
  return so_lon_nhat;
}
console.log(arr([10, 11, 12, 13, 14, 15]));
