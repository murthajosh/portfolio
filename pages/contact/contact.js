const emailAddress = document.querySelector('#my-email')


emailAddress.addEventListener('click', () => {
    navigator.clipboard.writeText(emailAddress.innerHTML);
})