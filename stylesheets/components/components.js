
// Alerts- Dismissable Alert Code.
const cancelIcon = document.querySelector(".cancel-icon");
const alertDismiss = document.querySelector(".alert-dismissable");

cancelIcon.addEventListener("click",()=>{
    alertDismiss.style.display="none"; 
})
