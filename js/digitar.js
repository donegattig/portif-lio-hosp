const phrases = [
    'Designer Gráfico',
    'Dev front end'
];

const typingContainer = document.getElementById('typing-container');
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function typeNextLetter() {
    const currentPhrase = phrases[currentPhraseIndex];
    typingContainer.innerHTML = currentPhrase.substring(0, currentLetterIndex + 1) + '<span style="opacity: 1;">|</span>';
    currentLetterIndex++;

    if (currentLetterIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(() => {
            eraseText();
        }, 500);
    } else {
        setTimeout(typeNextLetter, 100);
    }
}

function eraseText() {
    const currentPhrase = phrases[currentPhraseIndex];
    typingContainer.innerHTML = currentPhrase.substring(0, currentLetterIndex) + '<span style="opacity: 1;">|</span>';
    currentLetterIndex--;

    if (currentLetterIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    if (currentLetterIndex >= 0) {
        setTimeout(() => {
            eraseText();
        }, 50);
    } else {
        setTimeout(() => {
            typeNextLetter();
        }, 500);
    }
}

// Start the typing animation
typeNextLetter();


document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão 'about'
    var aboutButton = document.querySelector('a[href="#about"]');
  
    // Adicione um ouvinte de evento de clique ao botão 'about'
    aboutButton.addEventListener('click', function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link
  
      // Selecione o elemento de destino pelo ID
      var targetElement = document.getElementById('quemSouEu');
  
      // Verifique se o elemento de destino existe
      if (targetElement) {
        // Role suavemente até o elemento de destino
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão 'about'
    var aboutButton = document.querySelector('a[href="#works"]');
  
    // Adicione um ouvinte de evento de clique ao botão 'about'
    aboutButton.addEventListener('click', function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link
  
      // Selecione o elemento de destino pelo ID
      var targetElement = document.getElementById('workss');
  
      // Verifique se o elemento de destino existe
      if (targetElement) {
        // Role suavemente até o elemento de destino
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  