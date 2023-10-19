// // 날짜와 시간을 다루는 Date 객체
// const date = new Date();
// console.log(date);

// // JavaScript에서 Date 객체의 월(Month)은 0부터 시작합니다. 
// // 즉, 0은 1월을 나타내고 11은 12월을 나타냅니다. 
// // 따라서 new Date(2022, 11, 27)은 2022년 12월 27일을 나타냅니다. 
// // 월을 입력할 때는 이러한 특성을 고려해야 합니다.

// // 이렇게 사용하면 헷갈림
// const date1 = new Date(2022, 11, 27);
// console.log(date1);

// const date2 = new Date("2022-11-27");
// console.log(date2);

// UTC 기준으로 나옴
// const date4 = new Date("2022/12/25/18:00:00");
// console.log(date4);

let myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth() + 1); // 현재 월 출력
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력