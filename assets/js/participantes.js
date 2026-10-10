(() => {
  const cards = [...document.querySelectorAll(".participant-card")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  cards.forEach((card, cardIndex) => {
    const photos = [...card.querySelectorAll(".participant-photo")];
    const dots = [...card.querySelectorAll(".participant-card__dots i")];

    photos.forEach((img) => {
      img.addEventListener("error", () => img.classList.add("is-missing"));
    });

    if (reducedMotion) return;

    let index = 0;
    const rotate = () => {
      const available = photos.filter(img => !img.classList.contains("is-missing"));
      if (available.length < 2) return;

      photos.forEach(img => img.classList.remove("is-active"));
      dots.forEach(dot => dot.classList.remove("is-active"));

      index = (index + 1) % photos.length;
      let safety = 0;
      while (photos[index].classList.contains("is-missing") && safety < photos.length) {
        index = (index + 1) % photos.length;
        safety++;
      }

      photos[index].classList.add("is-active");
      if (dots[index]) dots[index].classList.add("is-active");
    };

    // Desfase entre tarjetas para que no cambien todas al mismo tiempo.
    setTimeout(() => {
      rotate();
      setInterval(rotate, 3000);
    }, 900 + (cardIndex % 8) * 240);
  });
})();