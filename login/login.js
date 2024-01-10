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

document.getElementById("login").addEventListener("click", (e)=>{
  fetch("https://db.copticwordle.repl.co/login", {
    method: "POST",
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: document.getElementById("em").value,
      password: document.getElementById("pw").value,
    }),
  })
  .then(async rsp=>{
    let msg=await rsp.json();
    if (rsp.status!=200) {
      msg=msg.message//JSON.parse(msg).message;ge
      alert('Error: '+msg);
    } else {
      id=msg.id;
      setId(id);
      location="/";
    }
  })
  .catch(err=>{
    alert("Something went wrong...");
    console.error(err);
  })
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
  document.getElementById("main").classList.add(theme);
  document.getElementById("j").classList.add(theme);
  document.getElementById("alpha").classList.add(theme);
  var l = document.getElementsByClassName("wrap");
  for(i=0;i<l.length;i++){ l[i].classList.add(theme); }
  var l = document.getElementsByClassName("inp");
  for(i=0;i<l.length;i++){ l[i].classList.add(theme); }
  var l = document.getElementsByClassName("submitB");
  for(i=0;i<l.length;i++){ l[i].classList.add(theme); }
}

function removeTheme(theme){
  document.body.classList.remove(theme);
  document.getElementById("logo").classList.remove(theme);
  document.getElementById("main").classList.remove(theme);
  document.getElementById("j").classList.remove(theme);
  document.getElementById("alpha").classList.remove(theme);
  var l = document.getElementsByClassName("wrap");
  for(i=0;i<l.length;i++){ l[i].classList.remove(theme); }
  var l = document.getElementsByClassName("inp");
  for(i=0;i<l.length;i++){ l[i].classList.remove(theme); }
  var l = document.getElementsByClassName("submitB");
  for(i=0;i<l.length;i++){ l[i].classList.remove(theme); }
}