// 표준 내장 객체 : 자바스크립트에서 개발의 편의를 위해 미리 만들어 놓은 것
// 문자열 다루는 String 객체
// length : 메서드가 아님 속성으로 존재, 문자열의 길이를 반환
const pw = "12345678";
if(pw.length < 6) {
    console.log("비밀번호의 길이는 최소 6자리 이상 입니다.");
    console.log(`입력 받은 비밀번호 길이는 ${pw.length}`);
} else {
    console.log("비밀번호 길이가 적절 합니다.");
}
// 특정 문자열 포함 여부 확인(true / false)
const email = "test!naver.com";
if(email.includes("@") === false) {
    console.log("올바른 메일 형식이 아닙니다.");
}

// 대상 문자열과 일치하는 첫 번째 문자의 인덱스를 반환
const email2 = "test!naver.com";
if(email2.includes("@") === -1) {
    console.log("올바른 메일 형식이 아닙니다.");
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 마지막에 발견된 문자열의 index를 반환
const email3 = "test!na!ver.com";
if(email3.lastIndexOf("!") !== -1) {
    console.log(email3.lastIndexOf("!"));
}
// slice() : 시작 위치와 종료 위치가 주어지면, 문자열에서 해당 부분을 잘라내서 반환
const str = "Apple, Banana, Kiwi";
const rst = str.slice(7);
const newStr = str.replace("Kiwi", "Orange");
console.log(newStr);

// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수이면, 기존의 문자열을 변경하지 않음
const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" " + text2);
console.log(text3);

let str2 = "5";
str2 = str2.padStart(4,0); // 0005
console.log(str2);