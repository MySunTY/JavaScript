'use strict';

let test =100;
//let result = test.toString()+"";
let result =String(test)+"";
document.write("result ="+result);
document.write("<br>");
let score = 535.353535;
let go = score.toFixed(2);
document.write(go);
document.write("<br>");

document.write("<br>");
let t = "100.50";
let temp = Number(t);
let k = temp.toFixed(2);
let r = Number(k)+150+parseFloat("20");
document.write(r);
//document.write("result ="+r.toFixed(2));
//document.write(r);
