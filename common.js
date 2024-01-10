

//tts
function tts(word){
  var msg = new SpeechSynthesisUtterance();
  msg.text = word;
  window.speechSynthesis.speak(msg);
}
//window.onbeforeunload=()=>tts("");

// src: https://www.quirksmode.org/js/cookies.html
function setId(id){
  document.cookie = "id="+id+"; expires=2147483647; path=/";
}
function getId() {
	var nameEQ = "id=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function clearId() {
  document.cookie = "id=; expires=-1; path=/";
}

function saveData(data,cb=()=>{}){
  let id=getId();
  if(id){
    fetch("https://db.copticwordle.repl.co/saveData", {
      method: "POST",
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        data: data,
      }),
    })
    .then(async rsp=>{
      let msg=await rsp.json();
      if (rsp.status!=200) {
        msg=msg.message//JSON.parse(msg).message;ge
        alert('Error: '+msg);
      } else {
        cb();
      }
    })
    .catch(err=>{
      alert("Something went wrong...");
      console.error(err);
    })
  }
}

async function loadData(){
  let id=getId();
  if(id){
    return new Promise((rs,rj)=>{
      fetch("https://db.copticwordle.repl.co/loadData", {
        method: "POST",
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
        }),
      })
      .then(async rsp=>{
        let msg=await rsp.json();
        if (rsp.status!=200) {
          msg=msg.message//JSON.parse(msg).message;ge
          alert('Error: '+msg);
          rj();
        } else {
          let data=msg.data;
          console.log(data);
          rs(data);
        }
      })
      .catch(err=>{
        alert("Something went wrong...");
        console.error(err);
        rj();
      })
    });
  }
}

function checkLogin(){
  if(id){
    document.getElementById("account").parentElement.outerHTML=`<button id="account">Log Out</button>`;
    document.getElementById("account").onclick=()=>{
      fetch("https://db.copticwordle.repl.co/logout", {
        method: "POST",
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
        }),
      })
      .then(async rsp=>{
        let msg=await rsp.json();
        if (rsp.status!=200) {
          msg=msg.message//JSON.parse(msg).message;ge
          alert('Error: '+msg);
        } else {
          clearId();
          location.reload();
        }
      })
      .catch(err=>{
        alert("Something went wrong...");
        console.error(err);
      })
    }
    (async()=>{
      //make vars global?
      dataFULL=await loadData();
      var data=dataFULL.substring(0,dataFULL.length-1);
      var thm=dataFULL[dataFULL.length-1];
      var ctr=thm;
      changeTheme();
      update();
      //
    })();
  }
}