document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu__items').classList.toggle('animate');
})
