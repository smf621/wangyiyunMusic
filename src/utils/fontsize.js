//rem 取决于根元素的fngt-size 1rem = 16px 
function fontSize(){
  var width = document.documentElement.clientWidth;
  var fontSize = width * 2 / 7.5
  document.documentElement.style.fontSize = fontSize + "px"
}
fontSize()
window.onresize = function(){
  fontSize()
}