'use strict';

//사용자에게 키 값과체중을 입력받는다.
//bmi = 체중/키*키
//bmi 출력하기
// 18.5 23 25.00
let ki = prompt("당신의 키는? (ex 1.8)");
alert("당신의 키는 " + ki+ "m 입니다");
let mom = prompt("당신의 몸무게는? (ex 70)");
alert("당신의 몸무게는 " + mom+"kg 입니다.");
let bmi = mom/(ki*ki);

document.write("당신의 bmi는 "+parseInt(bmi) +"입니다.");

let result = bmi>25;
document.write("<br>");
alert("당신의 bmi는 " +bmi.toFixed(2)+ "입니다.");
document.write(result);

let temp;// 변수 선언

document.write("<br>");
//숫자 변수 초기화
let data1 = 0;
//문자 변수 초기화
let data2= "";
//불린변수 초기화
let data3 = false;
//객체 변수 초기화
let data4 = null;
//객체 변수는 하나의 값이 아니라 주소값을 가짐, 그 주소로 가면 여러 데이터가 존재
data4 = new Date(); //data4는 실제 들어있는 데이터의 주소를 가리키는 값이 담겨있음
let year = data4.getFullYear();//실제 데이터중에서 년도값의 데이터를 제공
//document.write(year);//년도 값을 얻어옴
document.write("<br>");
let day = data4.getDay();

const data5 = new Date();
let xx = data5.getMonth();


//const 변하지 않는 데이터 : 상수 
//const를 붙이면 객체주소는 안바뀌고 안의 데이터는 바뀔 수 있음
const PI = 3.141592;
