//load the previously theme choice if there is one. 
window.addEventListener('load', () => {
    if(localStorage.getItem('themeChoice') == 1) {
        html.classList.add('dark-mode')
    }
} )



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

    if(html.classList.contains('dark-mode')) {
        localStorage.setItem("themeChoice", 1)
    } else {
        localStorage.setItem("themeChoice", 2)
    }
})
