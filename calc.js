const screen=document.getElementById("display");
window.addEventListener("keyup", keybord);
function keybord(event){
    const key=event.keyCode;
    switch(key){
        case(49):math(1);break;
        case(50):math(2);break;
        case(51):math(3);break;
        case(52):math(4);break;
        case(53):math(5);break;
        case(54):math(6);break;
        case(55):math(7);break;
        case(56):math(8);break;
        case(57):math(9);break;
        case(48):math(0);break;
        case(189):math("-");break;
        case(187):math("+");break;
        case(191):math("/");break;
        case(88):math("*");break;
        case(190):math(".");break;
        case(77):math("%");break;
        case(13):answer();break;
        case(46):clea();break;
    }

}
function math(jk){
    if(jk=="."){ return screen.textContent+=jk;}
    if( screen.textContent==="0"){
        screen.textContent=" "; 
    }    
    screen.textContent+=jk;
}
function answer(){
    let ans=eval( screen.textContent);
    ans=ans.toFixed(5);
    screen.textContent=ans;
}
function clea(){
    screen.textContent="0";
}










