const images = document.querySelectorAll('.img')
const containerShow = document.querySelector('.container-show')
const imageShow = document.querySelector('.img-show')
const imgText = document.querySelector('.img-text')
const closeIcon = document.querySelector('.close-icon')
images.forEach(image => {
    image.addEventListener('click', ()=>{
        addImge(image.getAttribute('src'),image.getAttribute('alt'))
    })
});

const addImge = (srcImage,altImage) =>{
    containerShow.classList.toggle('show')
    imageShow.classList.toggle('img-trasition')
    imageShow.src = srcImage
    imgText.innerHTML = altImage
}

closeIcon.addEventListener('click', () =>{
    containerShow.classList.toggle('show')
    imageShow.classList.toggle('img-trasition')
})