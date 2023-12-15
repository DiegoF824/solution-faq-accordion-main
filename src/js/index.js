const botoes = document.querySelectorAll(".botao");
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");
const texts = document.querySelectorAll(".text");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    texts.forEach(text => text.classList.add('hidden'));
    minusIcons.forEach(minusIcon => minusIcon.classList.add('hidden'));
    plusIcons.forEach((plusIcon, i) => {
        if (i !== index) {
            plusIcon.classList.remove('hidden');
        }
    });

    if (plusIcons[index].classList.contains("hidden")) {
      plusIcons[index].classList.remove("hidden");
      minusIcons[index].classList.add("hidden");
      texts[index].classList.add("hidden");
    } else {
      plusIcons[index].classList.add("hidden");
      minusIcons[index].classList.remove("hidden");
      texts[index].classList.remove("hidden");
    }
  });
});
