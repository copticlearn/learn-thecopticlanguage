var pos=0; //index 0 or 1?
var ans=[];
var thm=localStorage.getItem("thm");
function getTheme(){
  if(thm%2==0){
    setTheme("lightTheme");
  } else{
    setTheme("darkTheme");
  }
}

function setTheme(theme){
  document.body.classList.add(theme);
  document.getElementById("exit").classList.add(theme);
  document.getElementById("progress").classList.add(theme);
  document.getElementById("next").classList.add(theme);
  document.getElementById("back").classList.add(theme);
  document.getElementById("section").classList.add(theme);
  document.getElementById("container").classList.add(theme);
  let a=document.getElementsByClassName("b");
  console.log(a);
  console.log(a.length);
  for(i=0;i<a.length;i++){
    a[i].classList.add(theme);
    console.log(a[i]);
  }
}

//event listeners
document.getElementById("next").addEventListener('click', () => {
  if(checkCont()){
    ans[pos]=(document.getElementById("container").children[0].id);
    if(pos==questions.length-1){
      submit();
    }
    else{
      pos++;
      update();
    }
  }
  else{
      document.getElementById("container").style.border="3px solid red";
  }
});
document.getElementById("back").addEventListener('click', () => {
  if(pos>0){
    pos--;
    update();
  }
})

//update the text & fields
function update(){
  progress=((pos)/(questions.length-1))*100;
  document.getElementById("inner").style.width = progress+"%";
  document.getElementById("question").innerHTML=questions[pos];
  document.getElementById("container").style.border="0px none";
  deleteButtons();
  createButtons();
  if(pos<questions.length-1){
    document.getElementById("buttons").style.display="flex";
    document.getElementById("container").style.display="flex";
    document.getElementById("next").textContent = "Next";
  }
  else{
    document.getElementById("next").textContent = "Submit";
    document.getElementById("next").style.backgroundColor = "#6694ff";
  }
}

var arr=[];
var questions=[];
var ans=[];

//json questions
function getQuestions(){
  fetch("./quiz.json")
    .then(async (data) => {
      return data.json();
    })
    // added for debugging
    .catch((error) => {
      console.error(error)
    })
    .then(async (json) => {
      var disp;
      var j=json.u1l1;
      for(i=0;i<j.length;i++){
        disp=[];
        disp.push(j[i].question);
        if(j[i].type=="mc"){
          disp.push(j[i].a);
          disp.push(j[i].b);
          disp.push(j[i].c);
          disp.push(j[i].d);
        }
        else{
          disp.push(j[i].t);
          disp.push(j[i].f);
        }
        disp.push(j[i].ans);
        disp.push(j[i].type);
        arr.push(disp);
      }
      for(i=0;i<arr.length;i++){
        questions.push(arr[i][0]);
        ans.push("");
      }
      update();
    })

}

//make sure the right number of elements are in the container
function checkCont(){
  if(document.getElementById("container").children.length==1){
    return true
  }
  else{
    console.log(document.getElementById("container").children.length);
    return false;
  }
}

function buttonClick(e){
  if(e.target.parentNode.id=="buttons"){
    document.getElementById("container").appendChild(e.target);
  }
  else if(e.target.parentNode.id=="container"){
    document.getElementById("buttons").appendChild(e.target);
  }
}

function createButtons(){
  var l=arr[pos];
  var ind;
  if(l[l.length-1]=="mc"){
    var opt=["a", "b", "c", "d"];
    if(ans[pos]!=""){
      ind=opt.indexOf(ans[pos]);
    }
    for(i=1;i<=4;i++){
      const button=document.createElement('button');
      button.id=opt[i-1];
      button.innerHTML=l[i];
      button.addEventListener("click", (e) => {
        buttonClick(e);
      })
      button.classList.add("b");
      if(ind==i-1){
        document.getElementById("container").appendChild(button);
      }
      else{
        document.getElementById("buttons").appendChild(button);
      }
    }
  }
  if(l[l.length-1]=="tf"){
    var opt=["t", "f"];
    if(ans[pos]!=""){
      ind=opt.indexOf(ans[pos]);
    }
    for(i=1;i<=2;i++){
      const button=document.createElement('button');
      button.id=opt[i-1];
      button.textContent=l[i];
      button.addEventListener("click", (e) => {
        buttonClick(e);//what
      })
      button.classList.add("b");
      if(ind==i-1){
        document.getElementById("container").appendChild(button);
      }
      else{
        document.getElementById("buttons").appendChild(button);
      }
    }
  }
  //implement remembering button positions
  getTheme();
}

function deleteButtons(){
  document.getElementById("buttons").innerHTML="";
  document.getElementById("container").innerHTML="";
}

function getAns(qNum){
  if(arr[qNum][arr[qNum].length-1]=="mc"){
    return arr[qNum][5];
  } else{
    return arr[qNum][3];
  }
}

//check if an answer is right or wrong
function checkAns(){
  // ▼▼▼▼▼▼▼▼ variable for correct answers ▼▼▼▼▼▼▼▼▼▼
  var cAns=0;
  for(i=0;i<ans.length;i++){ 
    if(ans[i]==getAns(i)){ 
      cAns++;
    }
  }
  return String(cAns);
}

async function submit(){
  document.getElementById("end").style.display="block";
  var l = document.getElementsByClassName("main");
  for(i=0;i<l.length;i++){
    l[i].style.display="none";
  }
  let id=getId();
  if(id){
    d= await loadData();
    if(Number(d.substring(0,1))<checkAns()){
      d=checkAns()+d.substring(1);
      saveData(d);
    }
  } else{
    alert("Log in to save your score!");
  }
  document.getElementById("score").textContent=checkAns()+"/5";
}

getQuestions();
