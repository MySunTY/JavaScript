'use strict';

let name =prompt("당신의 이름은 무엇인가요?" , "고길동");
let height = prompt("당신의 신장은? 예)180" , "180")
//적정체중
document.write(height);
height = Number(height);
document.write("<br>");
document.write(height+30);
let fit = (height-100)*0.9;
alert(name+"님의 적정체중은 "+fit+"kg입니다");
document.write("<h3>"+name+"님의 적정체중은 "+fit+"kg입니다."+"</h3>");
//prompt로 받은건 다 문자열, 숫자로 형변환은 parseInt Number / but +가 아닌경우 계산가능
//문자열에 -로 계산시도하면 자동으로 숫자로 형변환 이루어짐
//암시적 형변환 "자동 / 명시적 형변환  수동
document.write("<br>");
let a=true;
let b=a+5;
b=!a-5;
document.write(b);//6 true =1 false =0
document.write("<br>");
let result = 3+true;
alert(result);

let value = 1335.35;
Number(value);
let value1 = 133.44;
document.write(parseInt(value1));
document.write("<br>");
document.write(parseFloat(value1));

//숫자를 문자로 형변환

let tt = 3;
String(tt);
document.write("<br>");
document.write(String(tt)+3);

document.write("<br>");
let test1 = 15;
let result1 = test1.toString();
document.write("result =" +result1);

