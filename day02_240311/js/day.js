let data =new Date();
let year = data.getFullYear();
let month = data.getMonth();
let day = data.getDate();
let hour = data.getHours();
let min = data.getMinutes();

//&nbsp;
document.write("<h1>"+year+"-0"+(month+1)+"-"+day+"&nbsp;&nbsp;"+hour+":"+min+"</h1>");

