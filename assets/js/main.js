

document.getElementById("openMailForm").addEventListener("click",()=>{
    document.getElementById("mailMe").style.display="grid";
    document.getElementById("mailMe").style.transition="500ms";
    document.getElementById("coverEvery").style.display="block";
    document.getElementById("coverEvery").style.transition="500ms";
});

document.getElementById("closeMail").addEventListener("click",()=>{
    document.getElementById("mailMe").style.display="none";
    document.getElementById("mailMe").style.transition="500ms";
    document.getElementById("coverEvery").style.display="none";
    document.getElementById("coverEvery").style.transition="500ms";
});