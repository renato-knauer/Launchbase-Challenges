const modalOverlay = document.querySelector('.modal-overlay')
const cardsClassesHtml = document.querySelectorAll('.cardClassesHtml')
const cardsContentHtml = document.querySelectorAll('.cardContentHtml')
const modal = document.querySelector('.modal')
const maximizeModal = document.querySelector('.maximize-modal')
const minimizeModal = document.querySelector('.minimize-modal')

function returnModalToStandard(modal, maximizeModal, minimizeModal) {
    modal.style.position = 'relative'
    modal.style.height = '90%'
    modal.style.width = '90%'
    modal.style.margin = '5vh auto'
    maximizeModal.style.visibility = 'visible'
    minimizeModal.style.visibility = 'hidden'
}


/*=== Cards in page classes.html ===*/


for (let card of cardsClassesHtml) {
    card.addEventListener('mouseover', function(){
        card.style.cursor = 'pointer'
        card.style.opacity = '0.5'
    })
    
    card.addEventListener('mouseout', function(){
        card.style.opacity = '1'
    })

    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
        document.querySelector('footer').style.visibility = 'hidden'
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
    document.querySelector('footer').style.visibility = 'visible'

    returnModalToStandard(modal, maximizeModal, minimizeModal)
})


/*=== Cards in page content.html ===*/


for (let card of cardsContentHtml) {
    card.addEventListener('mouseover', function(){
        card.style.cursor = 'pointer'
        card.style.opacity = '0.5'
    })
    
    card.addEventListener('mouseout', function(){
        card.style.opacity = '1'
    })

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
    document.querySelector('footer').style.visibility = 'visible'

    returnModalToStandard(modal, maximizeModal, minimizeModal)
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
    returnModalToStandard(modal, maximizeModal, minimizeModal)
})
