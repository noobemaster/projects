const task=document.getElementById(`txt`);
const Add=document.querySelector("#add");
const Del=document.querySelector("#del");
const list=document.querySelector("#list");
const br=document.getElementById("br");
const check=document.getElementsByClassName("item");
const don=document.getElementsByClassName("ask");
Add.addEventListener("click",addtask);
Del.addEventListener("click",dlete);
list.addEventListener("click", done);
window.addEventListener("keydown",clen);
function clen(event){
         const key=event.keyCode,enter=13,delet=46;
         if(key==enter){addtask();}
         else if(key==delet){dlete();}
}
function addtask(){
if(task.value!=""){
     let checkbox=document.createElement(`input`);
     checkbox.type='checkbox';
     checkbox.classList.add("item");
     list.appendChild(checkbox);
     let label=document.createElement(`label`);
     label.classList.add("ask");
     label.innerHTML=task.value+"<br>";
     list.appendChild(label);
     task.value="";
}
}
function done(){
for(let i=0;i<=list.children.length/2;i++){
if(check[i].checked){
    don[i].style.textDecoration="line-through";
    don[i].style.color="grey";
    list.append(don[i]);
    list.removeChild(check[i]);
}
}}
function dlete(){
    for(let i=0;i<=list.children.length/2;i++){
        while(don[i].style.color=="grey"){
            list.removeChild(don[i]); 
        }
    }
}