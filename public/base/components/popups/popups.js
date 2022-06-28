const triggers = document.querySelectorAll('.collection-grid-item')
const overlays = document.querySelectorAll('.overlay')

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        let target=trigger.getAttribute('name')
        console.log(target)

        let projectPopup=document.getElementById(target)
        projectPopup.classList.remove('hidden')
    })
})

overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay') || e.target.classList.contains('close')) {
            overlay.classList.add('hidden')
        }
    })
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        overlays.forEach(overlay => {
            overlay.classList.add('hidden')
        })
    }
})