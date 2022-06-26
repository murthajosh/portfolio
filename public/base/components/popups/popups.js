const triggers = document.querySelectorAll('.collection-grid-item')

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        let target=trigger.getAttribute('name')
        console.log(target)

        let overlay=document.getElementById(target)
        overlay.classList.remove('hidden')
    })
})