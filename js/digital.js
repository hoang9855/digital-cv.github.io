let title = document.querySelector("h1");
  if(document.location.href.includes("project-pets")){
  let all=document.querySelectorAll(".pets");
  title.innerHTML="Project Charter - PETS WEB";
  all.forEach((item)=>{
    item.style.display="grid";
  });
  } else if(document.location.href.includes("project-cv")){
  let all=document.querySelectorAll(".cv");
  title.innerHTML="Project Charter - CV WEB";
  all.forEach((item)=>{
    item.style.display="grid";
  });
  } else if(document.location.href.includes("project-news")){
  let all=document.querySelectorAll(".news");
  title.innerHTML="Project Charter - NEWS WEB";
  all.forEach((item)=>{
    item.style.display="grid";
  });
  }