// CÂU 13: Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]
function arr(mang){
  let so_chan = 0;                          
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] %2  == 0) {  
      so_chan++;  
    }
  } 
  return so_chan;
}
console.log(arr([10, 11, 12, 13, 14, 15]));
