

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const Elements = document.querySelectorAll('.hidden')

Elements.forEach((element) =>
    myObserver.observe(element))

const audio = document.querySelector('audio');
audio.volume= 0.3;

