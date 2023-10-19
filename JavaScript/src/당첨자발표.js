const personNumber = Number(prompt("응모자 수 : "));
const pickNumber = Math.floor(Math.random() * personNumber + 1)
document.write(`
<p>전체 응모자 수: ${personNumber} 명 </p>
<p>당첨자는 <span class="number">${pickNumber}</span>번 입니다. <br><span class="fighting">축하합니다!</span></p>
`)