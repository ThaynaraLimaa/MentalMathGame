// Show and hide menu
let hamburguerBtn = document.querySelector('#hamburguerBtn-js')

hamburguerBtn.addEventListener('click', () =>{
    document.querySelector('.menu-container').classList.toggle('show-menu')
})

// Switch themes
const chkBtn = document.querySelector('#inputCheckbox')
const html = document.querySelector('html')
chkBtn.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
})
