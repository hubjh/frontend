let number1, number2, number3;
number1 = Number(prompt("숫자1를 입력 하세요 : ", ""));
number2 = Number(prompt("숫자2를 입력 하세요 : ", ""));
number3 = Number(prompt("숫자3를 입력 하세요 : ", ""));
maxValue = Math.max(number1, number2, number3)
minValue = Math.min(number1, number2, number3)
document.write(number1 +", "+ number2 +", "+ number3 + "중에서")
document.write("가장 큰 수는 " + maxValue);
document.write("가장 작은 수는 " + minValue);