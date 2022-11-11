const messageinput=document.getElementById("message-input");
messageinput.addEventListener("keydown", function(event){
  if(event.key=="Enter"){
    getMessage()
  }
})
function getMessage(){
  document.getElementById("messageoutput").innerHTML=messageinput.value;
  messageinput.value='';
}