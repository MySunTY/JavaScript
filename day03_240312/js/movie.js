'use strict'

//총인원 , 가로열을 통해 세로열계산
let all = prompt("총인원이 몇명인가요?");
alert("총인원이 "+all+"명 이군요.");
let ga = prompt("가로열은 몇개인가요?");
alert("가로줄은 "+ga+"이군요");
alert("극장의 세로줄은 "+all/ga+"입니다");
let se = all/ga;

document.write("<h1>"+"극장의 총인원="+all+"명"+"</h1>");





document.write("<br>");
document.write("<h3>"+"극장의 가로줄= "+ga+"&nbsp,&nbsp"+"극장의 세로줄= "+all/ga+"</h3>");
let good = confirm("극장이 마음에 드시나요?");
// .toFixed(2)