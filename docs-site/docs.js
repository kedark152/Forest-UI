const expandIcon = document.querySelector("#more-icon");
const sidebar = document.querySelector(".docs-sidebar");

expandIcon.addEventListener("click",()=>{
    if(sidebar.style.display=="none"){
    sidebar.style.display="flex"; 
    expandIcon.innerText=`unfold_less`;
    
}
    else{
        sidebar.style.display="none";
        expandIcon.innerText=`unfold_more`;
    }
})