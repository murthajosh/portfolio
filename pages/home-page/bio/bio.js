    const bioButtonShort = document.getElementById('bio-short')
    const bioButtonMedium = document.getElementById('bio-medium')
    const bioButtonLong = document.getElementById('bio-long')
    
    const shortBioHeading = document.getElementById('short-bio-heading')
    const mediumBioHeading = document.getElementById('medium-bio-heading')
    const longBioHeading = document.getElementById('long-bio-heading')
    
    const shortBio = document.getElementById('short-bio')
    const mediumBio = document.getElementById('medium-bio')
    const longBio = document.getElementById('long-bio')
    
    if (document.querySelector('input[name="bio-length"]')) {
        document.querySelectorAll('input[name="bio-length"]').forEach((elem) => {
          elem.addEventListener("change", function(event) {
            if (bioButtonShort.checked) {
                shortBio.classList.remove('hidden')
                mediumBio.classList.add('hidden')
                longBio.classList.add('hidden')
            } else if (bioButtonMedium.checked) {
                shortBio.classList.add('hidden')
                mediumBio.classList.remove('hidden')
                longBio.classList.add('hidden')
            } else if (bioButtonLong.checked) {
                shortBio.classList.add('hidden')
                mediumBio.classList.add('hidden')
                longBio.classList.remove('hidden')
            } else {
                return
            }
          });
        });
    };
