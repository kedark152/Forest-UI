
// Alerts- Dismissable Alert Code.
const cancelIcon = document.querySelector(".cancel-icon");
const alertDismiss = document.querySelector(".alert-dismissable");

cancelIcon.addEventListener("click",()=>{
    alertDismiss.style.display="none"; 
})

//Forms validation
const inputs = document.querySelectorAll("input");
const btnSubmit = document.querySelector(".btn-submit");

const resultName = document.querySelector(".result-name");
const resultMobile = document.querySelector(".result-mobile");
const resultEmail = document.querySelector(".result-email");
const resultChkbox = document.querySelector(".result-check-box");


btnSubmit.addEventListener("click",()=>{
   
   for(i=0;i<inputs.length;i++){
    // Name field Validation    
        if(inputs[i].id=="form-name"){
            (inputs[i].value=="")?errorMessage(resultName): successMessage(resultName);
        }
   // Mobile Number field validation
        if(inputs[i].id=="mobile-no"){
            (inputs[i].value.match("[789][0-9]{9}"))?successMessage(resultMobile):errorMessage(resultMobile);
        }
    //Email field Validation
        if(inputs[i].id=="email-id"){ 
            (inputs[i].value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))?successMessage(resultEmail):errorMessage(resultEmail);
        }
    //Terms Condition tick Validation
        if(inputs[i].id=="terms"){
            (inputs[i].checked)? successMessage(resultChkbox):errorMessage(resultChkbox);
        }
   }
})

function errorMessage(result){
        result.childNodes[1].innerText=`error`;
        result.childNodes[3].innerText= `Please enter the valid input`;
        result.style.color="red";
        inputs[i].style.border="2px solid red";
}

function successMessage(result){
        result.childNodes[1].innerText=`check_circle`;
        result.childNodes[3].innerText= `Looks Good`;
        result.style.color="green";
        inputs[i].style.border="2px solid green"; 
}

//Modal Component
const btnOpenModal = document.querySelector(".btn-open-modal");
const btnCloseModal = document.querySelector("#modal-close");
const cancelBtn = document.querySelector(".btn-modal-cancel");
const modalBackground = document.querySelector(".modal-background");

btnOpenModal.addEventListener("click",()=>{
    modalBackground.classList.add("open-modal");
});
cancelBtn.addEventListener("click",()=>{
    modalBackground.classList.remove("open-modal");
});
btnCloseModal.addEventListener("click",()=>{
    modalBackground.classList.remove("open-modal");
});

//Ratings component
const stars = document.querySelectorAll(".ratings .material-icons");
const ratingsText = document.querySelector(".ratings-text");
const colorStars = stars;
stars.forEach(star =>{
    star.addEventListener("click",()=>{
        let starId = star.id;             //same as star element id in html
        let starTitle = star.title;       //same as star element title in html
        getRatingsText(starId,starTitle);  
        colorStars.forEach(colorStar=>{
            colorStar.style.color="grey";  //initially makes all stars grey
        }) 
        for(let i=0; i<=starId-1;i++){    //for-loop to color all stars gold till clicked star
          colorStars[i].style.color="gold";   
        }
    }) 
})
   
function getRatingsText(starId,starTitle){  //displays ratings result text
    ratingsText.innerText=`${starTitle}`;
    if(starId<3){
        ratingsText.style.color="red";      //Very-bad or bad
    }
    else if(starId==3){
        ratingsText.style.color="orange";   //good
    }
    else{
        ratingsText.style.color="green";   //very-good & excellent
    }
}

//Snackbar component
const baselineBtn = document.querySelector(".btn-baseline");
const leadingBtn = document.querySelector(".btn-leading");
const baseline = document.querySelector(".snackbar-baseline");
const leading = document.querySelector(".snackbar-leading");
const buttonCancel = document.querySelectorAll(".btn-cancel");

baselineBtn.addEventListener("click",()=>{
    baseline.style.display="flex";
           setTimeout(()=>{  baseline.style.display="none";},5000);
           buttonCancel[0].addEventListener("click",()=>{
            baseline.style.display="none";
           })
})
leadingBtn.addEventListener("click",()=>{
    leading.style.display="flex";
           setTimeout(()=>{  leading.style.display="none";},5000);
           buttonCancel[1].addEventListener("click",()=>{
            leading.style.display="none";
           })
})

