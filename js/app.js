/*------------------------ Cached Element References ------------------------*/
const form = document.querySelector('form')
const inp = document.querySelector('#input')
const submitBtn = document.querySelector('#submit-button')
const resetBtn = document.querySelector('#reset-button') 
const todoList = document.querySelector('#todo-list')

/*----------------------------- Event Listeners -----------------------------*/
form.addEventListener("submit", function(evt){
  evt.preventDefault()
})

submitBtn.addEventListener('click', function(event) {
  const newLi = document.createElement('li')
  newLi.textContent = inp.value
  if (inp.value === ''){

  }else {
    document.querySelector('ul').appendChild(newLi)
  }
  inp.value = ''
})

