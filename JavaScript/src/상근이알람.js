// 시간 정보(시간과 분)를 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력하기 `${}`
// 1. propmt를 사용해서 시간, 분 입력 받기
// 2. 입력 받은 시간을 분으로 환산으로 45분을 빼기
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간 만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력 시, 템플릿 문자열 사용
let hour;
let minute;
let total_minute;

hour = Number(prompt("시간을 입력 하세요(HH) : ", ""));
minute = Number(prompt("분을 입력 하세요(mm) : ", ""));
total_minute = (hour * 60 + minute - 45);
if (total_minute < 0) {
    total_minute = total_minute + (24 * 60);
}
let result_hour = parseInt(total_minute / 60)
let result_minute = total_minute % 60
document.write(`알람 설정된 시간은 ${result_hour}시 ${result_minute}분 입니다.`)
