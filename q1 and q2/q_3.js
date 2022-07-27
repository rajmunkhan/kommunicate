var num=window.prompt("enter the number");

const reverse=(num)=>{
    num=parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    console.log(num);
}
reverse(num);