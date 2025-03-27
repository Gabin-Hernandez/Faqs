window.onload = function () {
  const button = document.querySelectorAll(".faq-answer");
  button.forEach(function (button) {
    button.addEventListener("click", change);
  });
};

function change(e) {
  // Obtenemos el contenedor padre del botón (su div)
  const container = this.parentElement;

  // Dentro del contenedor, buscamos el span con la clase "answer"
  const currentAnswer = container.querySelector(".answer");

  // Seleccionamos la imagen del botón (input de tipo image) dentro del contenedor actual
  const imgButton = this.querySelector("input[type='image']");

  // Obtenemos todas las respuestas
  const answers = document.querySelectorAll(".answer");

  answers.forEach((item) => {
    // Cerramos las respuestas que NO son la actual
    if (item !== currentAnswer) {
      item.style.maxHeight = null;
      const block = item.closest("div");
      if (block) {
        // Dentro de ese div, seleccionamos el botón .faq-answer
        const plusButton = block.querySelector(
          ".faq-answer input[type='image']"
        );
        if (plusButton) {
          plusButton.src = "./assets/images/icon-plus.svg";
        }
      }
    }
  });

  // Toggle para la respuesta actual
  if (currentAnswer.style.maxHeight) {
    currentAnswer.style.maxHeight = null; // la cerramos
    imgButton.src = "./assets/images/icon-plus.svg";
  } else {
    currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px"; // la abrimos
    imgButton.src = "./assets/images/icon-minus.svg";
  }
}
