// CÂU 14: Đếm số lượng các số lẻ trong mảng arr = [10, 11, 12, 13, 14, 15]
function arr(mang){
  let so_le = 0;                          
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] %2  != 0) {  
      so_le++;  
    }
  } 
  return so_le;
}
console.log(arr([10, 11, 12, 13, 14, 15]));
