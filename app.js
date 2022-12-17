'use strict'

// Modo escrito (use strict)
//Geralmente, você pode omitir o ponto e vírgula em JavaScript, mas é uma boa prática
// revisar quando ele é necessário, antes de tomar qualquer decisão sobre isso.

// No arquivo JavaScript, use document.querySelector para obter a referência do botão.

const switcher = document.querySelector('.btn');

// Em seguida, adicione o ouvinte e o manipulador do evento click.
// No código a seguir, você adiciona um ouvinte para o evento click.
// A função passada para o ouvinte de eventos é seu manipulador de eventos real.

switcher.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme')

  var className = document.body.className;
  if(className == "light-theme") {
    this.textContent = "Dark";
  }
  else {
    this.textContent = "Light";
  }

// Usando o console, você tem uma visão interessante de como a alternância de temas CSS é tratada.
// Ambos os nomes de classe são aplicados ao elemento
// quando você alterna para tema escuro.
// No entanto, o último nome de classe aplicado, o tema escuro, tem precedência.
// Na guia Estilos, você pode ver que as regras de tema escuro substituem
// as regras de tema claro, que são mostradas usando o texto tachado.

  console.log('current class name: ' + className);
});



// É uma convenção JavaScript usar letras concatenadas para nomes de variáveis com mais de uma palavra – por exemplo, a variável className.