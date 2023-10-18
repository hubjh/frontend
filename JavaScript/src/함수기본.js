// 함수 선언문 : function 키워드로 생성, 호이스팅(끌어올림, 함수를 맨 앞에 올려놓고 코드를 읽기 시작)에 영향 받음, 
// 호출해야 실행 됨

// console.log(sum(10, 20));
// console.log(sum(100, 200));

// function sum(p1, p2) {
//     return p1 + p2;
// }

// 함수표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 되지 않음, 네이밍 함수와 익명의 함수로 만들 수 있음
// 함수도 객체이기 때문에 변수에 넣을 수 있다.
// const gugudan = function(dan) {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${3 * i}`);
//     }
// }
// gugudan(6);

// 화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법, 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨
const gugudan = (dan) => {
    for(let i = 1; i < 10; i++) {
        console.log(`${dan} * ${i} = ${3 * i}`);
    }
}

// gugudan(6);

// 기본값 할당 : 
// const sum = (num1, num2 = 100) => {
//     console.log(num1, num2);
//     return num1 + num2;
// }
// const sum = (num1, num2 = 100) => num1 + num2;
// 자바스크립트에서는 매개변수의 수 만큼 인수를 전달하지 않아도 오류를 발생하지 않음
// console.log(sum(10));

// 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
// let a = 10; // 전역 스코프 || 사용하는것은 비추, 매개변수로 전달하는게 좋다
// function sum() {
//     let a = 10; // 지역 스코프 || 블록 스코프 (지역변수))
//     console.log(`함수 내부 : ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// let a = 10;
// {
//     let b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 내부 a : ${a}`);
// console.log(`코드 블록 내부 b : ${b}`);

// 참조 우선순위
// let a = 10
// const b = 20;
// function sum() {
//     let a = 50;
//     const b = 70;
//     console.log(`함수 내부 a : ${a}`);
//     console.log(`함수 내부 b : ${b}`);
// }
// sum();

let a = 10;
let b = 20;
{
    let a = 30;
    let b = 40;
    console.log(`함수 내부 a : ${a}`)
    console.log(`함수 내부 b : ${b}`)
}

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수

(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행 합니다.");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "3030";
}