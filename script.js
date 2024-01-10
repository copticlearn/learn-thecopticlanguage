var dataFULL="00000"
//var dataFULL="0000000000"
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
  data=dataFULL.substring(0,dataFULL.length-1);
  //thm=dataFULL[dataFULL.length-1];
  //ctr=thm;
  document.body.classList.add(theme);
  document.getElementById("main").classList.add(theme);
  var l=document.getElementsByClassName("progressBar");
  for(i=0;i<l.length;i++){
    l[i].classList.add(theme);
  }
  var l=document.getElementsByClassName("pText");
  for(i=0;i<l.length;i++){
    l[i].classList.add(theme);
  }
  update();
}

function removeTheme(theme){
  document.body.classList.remove(theme);
  document.getElementById("main").classList.remove(theme);
  var l=document.getElementsByClassName("progressBar");
  for(i=0;i<l.length;i++){
    l[i].classList.remove(theme);
  }  
  var l=document.getElementsByClassName("pText");
  for(i=0;i<l.length;i++){
    l[i].classList.remove(theme);
  }
  update();
}


//onclick for unit modules
function update(){
  var a = document.getElementsByClassName("module");
  var b = document.getElementsByClassName("progressBar");
  var d = document.getElementsByClassName("progressC");
  var t = document.getElementsByClassName("pText");
  for(i=0;i<a.length;i++){
    a[i].addEventListener("click", function(e){
      window.location.href = "https://beta.learn.thecopticlanguage.com/lessons/"+e.target.closest(".module").id+".html";
      console.log(e.target.parentNode.parentNode.parentNode.id);
    })
    b[i].style.setProperty("--progress", String((data[i]/5)*100)+"%");
    var c=((data[i]/5)*100)*(255/100);
    var offset=Number((-1086/100)*(100-(data[i]/5)*100));
    console.log(offset);
    d[i].style.strokeDashoffset=(offset);
    d[i].style.stroke="rgb("+String(255-c)+","+String(c)+",0)";
    if(ctr%2==0){
      //light theme
      d[i].style.fill="rgb(216, 216, 216)";
    } else{
      //dark theme
      d[i].style.fill="rgb(100, 100, 100)";
    }
    
    //b[i].style.innerHTML = String((data[i]/5)*100)+"%";
  }
  for(i=0;i<t.length;i++){
    t[i].innerHTML = String(((data[i]/5)*100))+"%";
  }
}

//cookies (NOOOOOOOOOOOO NOT AGAIN)
let id=getId();
checkLogin();

update();
