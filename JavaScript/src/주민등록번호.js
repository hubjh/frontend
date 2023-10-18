// ### 연습문제 - 주민 등록 번호를 입력 받아 성별, 나이, 출력 하기

// - 문자열을 자르는 substring사용
// - 날짜 계산을 위해 Date 내장 객체 사용 (new Date())
// - 주민등록번호 입력 길이 체크
// - 하이픈 포함 여부 체크 (indexOf)
// - HTML + CSS로 이쁘게 출력 하기

 // 연도 차이
const getYearDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    
    const diffDate = date1.getTime() - date2.getTime();
    
    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));
}
  
const getGender = (n1) => {
    const arr = [1, 3, 5, 7 ,9];
    if(arr.includes(Number(n1))) {
        return "Male";
    } else {
        return "Female";
    }
}

const str= prompt("주민등록번호를 입력하세요 : ", "");

    
let highFon =  str.indexOf("-");

if(str.length != 14){
    console.log("주민등록번호 14자리를 입력해 주세요.");
    document.write("주민등록번호 14자리를 입력해 주세요.", '<br/>');
} else if(highFon == -1) {
    console.log("'-'을 포함시켜 입력해주세요.");
    document.write("'-'을 포함시켜 입력해주세요.", '<br/>');
} else {
    let first_char = str.substring(0, 6);
    let second_char = str.substring(7, 14);
    year = 1900 + Number(first_char.substring(0,2));
    month = Number(first_char.substring(2,4));
    day = Number(first_char.substring(4,6));
    const now = new Date();    // 오늘 날짜
    const birth = new Date(year, month, day);
    
    console.log(`나이 : ${getYearDiff(now, birth)}`);
    document.write(`나이 : ${getYearDiff(now, birth)}`, '<br/>');
    console.log(`성별 : ${getGender(second_char.charAt(0))}`);
    document.write(`성별 : ${getGender(second_char.charAt(0))}`, '<br/>');
}