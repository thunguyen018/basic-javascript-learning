//CÂU 9: Viết chương trình in ra hình chữ nhật có cạnh a, b
function rectangle(a,b)
{
    let print = '*'
    for (let i = 1 ; i < b ; i++) {
       print = print + ' *'
    }

    for (let e = 0; e < a; e++) {
        console.log(print);
    }
}
rectangle(3,5)
