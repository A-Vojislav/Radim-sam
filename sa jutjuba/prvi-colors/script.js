// let index=0;

// function changeColors() {
//     let colors = ['red','blue','orange','yellow','green','purple'];
//     document.getElementsByTagName("body")[0];
//     style.background = colors[index++];
// if(index>=colors.length-1){
//     index=0;
// }
// }

var colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
var index = 0;

document.querySelector("#submit").addEventListener("click", () => {
  if(index > colors.length - 1)
    index = 0;
  document.body.style.backgroundColor = colors[index++];  
});