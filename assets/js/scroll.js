const menuLinks = document.querySelectorAll('#menu a')


function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })
}


function scrollToSection(event) {
    event.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 24
    nativeScroll(distanceFromTheTop)
}

menuLinks.forEach((link)=> {
    link.addEventListener('click', scrollToSection)
})