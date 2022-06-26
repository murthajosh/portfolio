const copyButton = document.querySelector('.copy-button')
const successMessage = document.querySelector('.success-message')


copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText('murthajosh@gmail.com');
    successMessage.classList.remove('hidden');
})