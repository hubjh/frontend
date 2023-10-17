// n개의 정수를 입력 받아 n * n 출력
// CSS 적용해서 출력
// 3
// 1 2 3
// 4 5 6
// 7 8 9

num = Number(prompt("숫자를 입력하세요 : ", ""));
for (let i = 1; i <= num * num; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(`${i} `);
    if (i % num == 0) {
        document.write('<br>');
    }
}