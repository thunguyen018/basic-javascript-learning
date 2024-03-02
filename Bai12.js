// CÂU 12: Đếm số lượng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
function arr(mang){
  let so_am = 0;                          
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] < 0) {  
      so_am++;  
    }
  } 
  return so_am;
}
console.log(arr([10, 11, 12, -10, -11, -12]));
