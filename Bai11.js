// CÂU 11: Đếm số lượng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
function arr(mang){
  let so_duong = 0;                          
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {  
      so_duong++;  
    }
  } 
  return so_duong;
}
console.log(arr([10, 11, 12, -10, -11, -12]));
