const btn = document.querySelector('.arrow')
const arrow = document.querySelector('.arrow i')
const div = document.querySelector('.item1')

btn.addEventListener('click',()=>{
    div.classList.toggle('hide')
    arrow.classList.toggle('rotate')
})