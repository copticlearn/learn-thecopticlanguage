
//TODO Local storage
var dataFULL="03200"
var data=dataFULL.substring(0,dataFULL.length-1);
if(!localStorage.getItem("thm")){
  localStorage.setItem("thm", 0);
}
var thm=localStorage.getItem("thm");
var ctr=thm;
changeTheme();

//darkmode/lightmode
document.getElementById("modes").addEventListener("click", function(){
  ctr++;
  changeTheme();
})

function changeTheme(){
  if(ctr%2==0){
    setTheme("lightTheme");
    removeTheme("darkTheme");
    localStorage.setItem("thm", 0);
    document.getElementById("modes").textContent="☀️";
  } else{
    setTheme("darkTheme");
    removeTheme("lightTheme");
    localStorage.setItem("thm", 1);
    document.getElementById("modes").textContent="🌙";
  }
}

function setTheme(theme){
  document.body.classList.add(theme);
  document.getElementById("logo").classList.add(theme);
  document.getElementById("account").classList.add(theme);
  document.getElementById("main").classList.add(theme);
  var l=document.getElementsByClassName("progressBar");
  for(i=0;i<l.length;i++){
    l[i].classList.add(theme);
  }
  var l=document.getElementsByClassName("bQuiz");
  for(i=0;i<l.length;i++){
    l[i].classList.add(theme);
  }
}

function removeTheme(theme){
  document.body.classList.remove(theme);
  document.getElementById("logo").classList.remove(theme);
  document.getElementById("account").classList.remove(theme);
  document.getElementById("main").classList.remove(theme);
  var l=document.getElementsByClassName("progressBar");
  for(i=0;i<l.length;i++){
    l[i].classList.remove(theme);
  }
  var l=document.getElementsByClassName("bQuiz");
  for(i=0;i<l.length;i++){
    l[i].classList.remove(theme);
  }
}

function coptTTS(){
  for (el of document.querySelectorAll('coptic')){
    let element=el;
    element.onclick=()=>tts(element.id);
    console.log(el.id);
  }
}

let id=getId();
checkLogin();

coptTTS();
