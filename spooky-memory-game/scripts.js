// Select everything with class .memory-card
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  // lockboard so two sets of cards cannot be flipped at the same time
  if (lockBoard) return;
    //if this is the first card to be flipped
  if (this === firstCard) return;

  //flip the card when clicked, a flip class (animation) will be added to the first card
  this.classList.add('flip');


  //if first card has already had flip class added 
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

//set flip class to second card
  secondCard = this;

//run check match function  
  checkForMatch();  
}

function checkForMatch() {
  //if the first card and second card are the same, they are a match! Count how many cards are flipped.
  if (firstCard.dataset.framework === secondCard.dataset.framework) {  
    disableCards();
    countCards();
    return;
  }
  //reset the cards, they are not a match
  unflipCards();
}

//Count how many cards are flipped. If 8 are flipped, you win the game! If not, keep playing.
function countCards() {
  let cardsFlipped = document.getElementsByClassName('memory-card flip').length;
  if(cardsFlipped === 8) {
    setTimeout(() => {
    winMessage();
    }, 1000)};
}

//make the cards unable to be flipped again, because they are a match! Keep flip class.
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

//remove flip class
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

//reset board 
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//shuffle the cars in random order
(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 9);
    card.style.order = ramdomPos;
  });
})();


function winMessage(){
  var element = document.getElementById("you-win");
  element.classList.remove("hidden");
}

cards.forEach(card => card.addEventListener('click', flipCard));

