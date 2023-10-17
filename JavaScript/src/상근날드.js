let burger1;
let burger2;
let burger3;
let drink1;
let drink2;

burger1 = Number(prompt("햄버거1 : ", ""));
burger2 = Number(prompt("햄버거2 : ", ""));
burger3 = Number(prompt("햄버거3 : ", ""));
drink1 = Number(prompt("음료수1 : ", ""));
drink2 = Number(prompt("음료수2 : ", ""));

foods = [burger1, burger2, burger3];
drinks = [drink1, drink2];

let total_minute = (Math.min(...foods) + Math.min(...drinks) - 50);
document.write(`${total_minute}원`)