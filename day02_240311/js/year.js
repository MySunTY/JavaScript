'use strict';
let nmm = prompt("당신의 이름은 무엇인가요");
alert("당신의 이름은 "+ nmm+ "입니다");
document.write("나의 이름은 "+nmm+"입니다.")
document.write("<br>");
let birth = prompt("태어난 해는? (ex 2023)");
birth=Number(birth);
document.write("나의 나이는 "+(2024-birth+1)+"살입니다.");
alert("당신의 나이는 " + (2024-birth+1)+"입니다");
document.write("<br>");
let 키는 = prompt("키는?");
alert("당신의 키는 "+ 키는 +"입니다.");
document.write("나의 키는 "+키는+"cm입니다.");
document.write("<br>");
let house = prompt("집은 어디인가요");
alert("당신의 집은 " +house+ "입니다.");
document.write("나의 집은 "+house+"입니다.");

let result = confirm("사람인가요?");
document.write("<br>");
document.write(result);
document.write("<br>");
let re1 = confirm("남자인가요");
document.write(re1);
document.write("<br>");
let re2 = confirm("여자인가요?");

