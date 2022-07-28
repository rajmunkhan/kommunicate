var num=852;

const reverse=(num)=>{
    num=parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    return num;
}
console.log(reverse(num));