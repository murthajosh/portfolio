const emailAddress = document.querySelector('#my-email')
const copyButton = document.querySelector('.copy-button')


copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(emailAddress.innerHTML);
})