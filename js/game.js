const grid = document.querySelector('.grid');
const player = document.querySelector('.player');
const timer = document.querySelector('.timer');
const reset = document.querySelector('.reset.botao');
const audio = document.getElementById("myAudio");
const btnPlayPause = document.getElementById("myBtnPlayPause");
const btnMute = document.getElementById("myBtnMute");
audio.volume = 0.1;



const character = [
  'alex',
  'emily',
  'fazendeiro',
  'junimo',
  'leah',
  'maru',
  'pam',
  'sam',
  'sebastian',
  'shane',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disableCard = document.querySelectorAll('.disable-card');

  if (disableCard.length == 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${player.innerHTML}  seu tempo foi: ${timer.innerHTML}`);
    reset.classList.remove('disable-card');
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter == secondCharacter) {
    setTimeout(() => {
      firstCard.firstChild.classList.add('disable-card');
      secondCard.firstChild.classList.add('disable-card');

      firstCard = '';
      secondCard = '';
      checkEndGame();
    }, 1000);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-cards');
      secondCard.classList.remove('reveal-cards');
      firstCard = '';
      secondCard = '';
    }, 1000);
  }
};

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-cards')) {
      return;
    }
    if (firstCard == '') {
      target.parentNode.classList.add('reveal-cards');
      firstCard = target.parentNode;
    } else if (secondCard == '') {
      target.parentNode.classList.add('reveal-cards');
      secondCard = target.parentNode;

      checkCards();
    }
  };

  front.style.backgroundImage = `url('../images/${character}.gif'`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character);

  return card;
};

const loadGame = () => {
  const duplicateCharacter = [...character, ...character];

  const flush = duplicateCharacter.sort(() => Math.random() - 0.5);
  flush.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const start = () => {
  this.loop = setInterval(() => {
    const time = +timer.innerHTML;
    timer.innerHTML = time + 1;
  }, 1000);
};

window.onload = () => {
  player.innerHTML = localStorage.getItem('player');
  start();
  loadGame();
};

reset.addEventListener('click', () => {
  location.reload();
});

btnPlayPause.addEventListener("click", () => {
    if (audio.paused) {
    audio.play();
    
    btnPlayPause.classList.remove("paused");
    } else {
    audio.pause();
   
    btnPlayPause.classList.add("paused");
    }
    });
    
    btnMute.addEventListener("click", () => {
    if (audio.muted) {
    audio.muted = false;
    
    } else {
    audio.muted = true;
   
    }
    });
    btnPlayPause.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          btnPlayPause.innerHTML = "Pausar";
          btnPlayPause.classList.remove("paused");
        } else {
          audio.pause();
        
          btnPlayPause.classList.add("paused");
        }
      });
      
      btnMute.addEventListener("click", () => {
        if (audio.muted) {
          audio.muted = false;
         
        } else {
          audio.muted = true;
          
        }
      });
      