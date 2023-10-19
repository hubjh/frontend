const now = new Date();
const end = new Date("2024-02-21");

const diff = end.getTime() - now.getTime();
const diffDate = Math.ceil(diff / (1000*60*60*24))
console.log(`${diffDate}일 남았습니다. 힘내세요!!!!!!! \n화이팅!`);

document.write(`<p><span class="number">${diffDate}</span> 일 남았습니다. 힘내세요!!!!!!! <br><span class="fighting">화이팅!</span></p>`);

// const print = document.querySelector('.print');
// print.write = function() {
//     heading.style.color = "red";
// }