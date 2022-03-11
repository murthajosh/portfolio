const bioButtonShort = document.getElementById('bio-short')
const bioButtonMedium = document.getElementById('bio-medium')
const bioButtonLong = document.getElementById('bio-long')

const shortBio = document.getElementById('short-bio')
const mediumBio = document.getElementById('medium-bio')
const longBio = document.getElementById('long-bio')

if (document.querySelector('input[name="bio-length"]')) {
    document.querySelectorAll('input[name="bio-length"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        if (bioButtonShort.checked) {
            console.log('bio one firing');
        } else if (bioButtonMedium.checked) {
            console.log('bio two firing');
        } else if (bioButtonLong.checked) {
            console.log('bio three firing');
        }
      });
    });
};