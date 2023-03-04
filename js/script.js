function handleSubmit(){
  //lay gia tri email chuyen sang in thuong
  const emailValue = document.getElementById('email').value.toLocaleLowerCase();
  //lay ement the p hien thi loi
  const errorEmail =  document.getElementById('error-email');
  const checkMail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //dung match kiem tra email
  
  const check = emailValue.match(checkMail);
  
  //lay phan chua thong tin user
  const sectionContent = document.querySelector('.section-content')
  console.log('check section', sectionContent);
  //lay ement de kiem soat submit
  const submitControl = document.querySelector('.submit-email');
  if(check){
    sectionContent.style.display = 'block';
    submitControl.style.display = 'none';
    errorEmail.innerHTML =  ''

  }else{
    errorEmail.innerHTML = 'vui lòng nhập đúng định dạng email';
  }

};


//an thong tin nghe nghiep
function handleOnMouseOver(element){
  const viewMore = element.querySelector('.control-view');
  viewMore.style.display='inline-block';
}
function handleOnMouseOut(element){
  const viewMore = element.querySelector('.control-view');
  if(!viewMore.classList.value.includes('less-more')){
    viewMore.style.display ='none';
  }
}
function handleViewMore(element){
  const parentElement = element.closest('.parent');
  const viewMore = parentElement.querySelector('.control-view');
  const sectionContent = parentElement.querySelectorAll('.section-content');
  if(viewMore.classList.value.includes('view-more')){
    sectionContent.forEach((element) => {
      element.style.display = 'block';
      
    });
    viewMore.classList.remove('view-more');
    viewMore.classList.add('less-more');
    viewMore.innerHTML = 'Less more';
    
  }else{
    sectionContent.forEach((element) => {
      element.style.display = 'none';
      
    });
    viewMore.classList.remove('less-more');
    viewMore.classList.add('view-more');
    viewMore.innerHTML = 'View more';
    

}

}

