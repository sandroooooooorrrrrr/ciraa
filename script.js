const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementsByClassName('close')[0];

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.src;
    });
});

closeBtn.onclick = function() { 
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
