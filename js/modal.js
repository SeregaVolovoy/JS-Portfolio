const modalButton = document.querySelector('.more');

const modal = document.querySelector('.modal');

const overlay = modal.querySelector('.overlay');
console.log(overlay);

modalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');

});

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});