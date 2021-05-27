const flipCard = document.querySelector('.allcards');

flipCard.addEventListener('mouseover', () => {
  bgChange('black');
})

flipCard.addEventListener('mouseout', () => {
  bgChange('#ccff00');
})

function bgChange(bg) {
  document.body.style.background = bg;
}