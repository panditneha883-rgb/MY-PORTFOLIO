const text=["Web Developer","Designer","Learner"];
let i = 0,j= 0,isDeleting=false;
const typingElement = document.getElementById("typing-text");

function type() {
    if(!isDeleting && j< text[i].length){
        typingElement.innerHTML += text[i][j]; j++;
        setTimeout(type,100);
    }
    else if (!isDeleting && j>0){
      typingElement.innerHTML = text[i].substring(0,j-1);j--;
      setTimeout(type,50);  
    }
    else{
        isDeleting=!isDeleting;
        if(!isDeleting) i =(i+1)% text.length;
        setTimeout(type,1000);
    }
}

type();
const themebtn = document.getElementById("theme-btn");

themebtn.onclick = function(){
    document.body.classList.toggle("dark");
    
    if(document.body.classList.contains("dark")){
        themebtn.innerHTML = "☀️"; 
    } else {
        themebtn.innerHTML = "🌙"; 
    }
}

function showDetails(){
  var container = document.getElementById("personal-details");
  var btn = document.getElementById("showBtn");
  var lines = container.querySelectorAll(".info-row");

  if(container.style.display === "none" || container.style.display === ""){
    container.style.display = "block";
    btn.innerHTML = "Show Less";
    
    lines.forEach((line, index) => {
      line.style.opacity = "0";
      line.style.transform = "translateY(20px)";
      setTimeout(() => {
        line.style.transition = "all 0.4s ease";
        line.style.opacity = "1";
        line.style.transform = "translateY(0)";
      }, index * 150);
    });

  }else{
    container.style.display = "none";
    btn.innerHTML = "Read More";
  }
}