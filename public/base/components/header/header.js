const navCurtain = document.querySelector('.nav-curtain')
const pageContent = document.getElementById('page-content')

document.addEventListener('click', function(e) {
    if (!e.target.matches('.nav-toggle')) {
        return
    } else {
        navCurtain.classList.toggle('hidden')
        pageContent.classList.toggle('disabled')
    }
})

document.addEventListener('keydown', function(e) {
    if (!e.key === "Escape") {
        return
    } else if (e.key === "Escape"){
        navCurtain.classList.add('hidden')
        pageContent.classList.remove('disabled')
    }
})