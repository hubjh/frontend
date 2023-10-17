/* 1. 성적을 입력 받아 학점 출력하기
    - 0 ~ 100점 사이가 아니면 입력 오류 출력
    - 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리 */

let score;

score = Number(prompt("성적을 입력하세요 : ", ""));
if (!(score > 0 && score < 100)) {
    document.write('NaN');
} else {
    if(score >= 90) {
        document.write('A');
    } else if(score >=80) {
        document.write('B');
    } else if(score >=70) {
        document.write('C');
    } else if(score >=60) {
        document.write('D');
    } else {
        document.write('F');
    }
}


// let isRed = false;
// const head = document.querySelector('#head-line');
// head.onclick = function() {
//     if(!isRed) {
//         head.style.color = "red";
//         console.log("현재 컬러는 레드 입니다.")
//     } else {
//         head.style.color = "blue";
//         console.log("현재 컬러는 블루 입니다.")
//     }
//     isRed = !isRed;
// }