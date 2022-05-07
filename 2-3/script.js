const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
const maximizeModal = document.querySelector('.maximize-modal')
const minimizeModal = document.querySelector('.minimize-modal')

for (let card of cards) {
    card.addEventListener('click', function(){
        const postId = card.getAttribute('id')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}`
        document.querySelector('footer').style.visibility = 'hidden'
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
    modal.style.position = 'relative'
    modal.style.height = '90%'
    modal.style.width = '90%'
    modal.style.margin = '5vh auto'
    maximizeModal.style.visibility = 'visible'
    minimizeModal.style.visibility = 'hidden'
    document.querySelector('footer').style.visibility = 'visible'
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    modal.style.position = 'absolute'
    modal.style.height = '100%'
    modal.style.width = '100%'
    modal.style.margin = '0'
    maximizeModal.style.visibility = 'hidden'
    minimizeModal.style.visibility = 'visible'
})

document.querySelector('.minimize-modal').addEventListener('click', function(){
    modal.style.position = 'relative'
    modal.style.height = '90%'
    modal.style.width = '90%'
    modal.style.margin = '5vh auto'
    maximizeModal.style.visibility = 'visible'
    minimizeModal.style.visibility = 'hidden'
})