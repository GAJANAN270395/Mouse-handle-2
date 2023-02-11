let select = document.querySelector('.divvy');
select.innerHTML = 'hello world';
select.style.width = '200px';
select.style.height = '200px';
select.style.backgroundColor = 'pink';
select.addEventListener("mousedown", function (e){
  message("green", e);
})
select.addEventListener("mouseover", function (e){
  message("red", e);
})
select.addEventListener("mouseout", function (e){
  message("yellow", e);
})
select.addEventListener("mouseup", function (e){
  message("blue", e);
})
function message (elColor , event){
  console.log(event.type);
  select.style.backgroundColor = elColor;
}