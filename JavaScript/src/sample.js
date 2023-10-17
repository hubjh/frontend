/* DOM이 만들어지고 나서 제어가 들어가야 하므로 마지막에 script 태그를 작성 */
let isRed = false;
const head = document.querySelector('#head-line');
head.onclick = function() {
    if(!isRed) {
        head.style.color = "red";
        console.log("현재 컬러는 레드 입니다.")
    } else {
        head.style.color = "blue";
        console.log("현재 컬러는 블루 입니다.")
    }
    isRed = !isRed;
}
