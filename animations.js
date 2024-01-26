const introCurtains = document.querySelector('#intro')
const loadingAnim = document.querySelector('#loading-anim')
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadingAnim.style.scale = "0.5"
        introCurtains.style.top = "-100%"
    }, 500)
})