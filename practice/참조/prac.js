'use strict';

let size = new Array(10);
size[0] = 1;
size[1] = 10;
size[2] = 100;
size[3] = 1000;
size[4] = 10000;
size[5] = 100000;
size[6] = 1000000;
size[7] = 10000000;
size[8] = 100000000;
size[9] = 1000000000;

//document.write(size[5]);

size.push(255);
size.push(2523525);
size.push(3536);
document.write("<br>");
let sigan = new Date();
let year = sigan.getFullYear();
let month =sigan.getMonth()+1;
let date = sigan.getDate();
let hour = sigan.getHours();
let min = sigan.getMinutes();
document.write("로그인 시간: "+year+"-"+month+"-"+date+"&nbsp;&nbsp;&nbsp;"+hour+"-"+min); 

/*let soo = prompt("숫자는요?");
alert("입력하신 숫자는 "+soo+"입니다");
if(soo%2==0){
    alert(soo+"(은)는 짝수입니다");
}else{
    alert(soo+"(은)는 홀수입니다");
}   */

let k = confirm("만족하십니까?");
if(k==true){
    alert("만족합니다");
}else{
    alert("아니요 만족하지 않습니다");
}