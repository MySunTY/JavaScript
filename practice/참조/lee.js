'use strict';

let name = prompt("이름이 무엇인가요");
alert("이름이 "+name+"이군요.");
let human = confirm("사람인가요?");
document.write(name+"님이 사람인 것은 "+human+"입니다.");
let today =new Date;
let year = today.getFullYear();
let month = today.getMonth()+1;
let date = today.getDate();
