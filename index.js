
var btn1=document.querySelector('.button1');
var btn2=document.querySelector('.button2');
var btn3=document.querySelector('.button3');
var btn4=document.querySelector('.button4');
var btn5=document.querySelector('.button5');
var ratebtn=document.querySelector('.rate-btn');
var timeBtn = document.querySelector(".time-btn");

var time = document.getElementById("time");
var heartDiv = document.getElementById("heart-div");


// var watchImg=document.querySelector('.watches-img');
btn1.addEventListener('click',function(){
  document.querySelector('.watches-img').src="images/watch1.png";
});

btn2.addEventListener('click',function(){
  document.querySelector('.watches-img').src="images/watch2.png";
});
btn3.addEventListener('click',function(){
  document.querySelector('.watches-img').src="images/watch3.png";
});
btn4.addEventListener('click',function(){
document.querySelector('.watches-img').src="images/watch4.png";
});
btn5.addEventListener('click',function(){
  document.querySelector('.watches-img').src="images/watch5.png";
});
 ratebtn.addEventListener('click',function(){
  alert("your heart rate 78❤️❤️");
});
setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec;

  document.getElementById("time").innerHTML = currentTime;
}
showTime();
timeBtn.addEventListener("click", function () {
  heartDiv.style.display = "none";
  time.style.display = "block";
});
