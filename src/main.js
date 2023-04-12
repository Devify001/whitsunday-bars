// JS for responsive navigation bar
const hamburger = document.querySelector(".hamburger"); // gives access to hamburger class
const navMenu = document.querySelector(".nav-menu"); // gives access to nav-menu

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active"); // activates class that turns into x and displays menu
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n // closes dropdown navbar when link is clicked
    .addEventListener("click", () => {
      hamburger.classList.remove("active"); // removes active status
      navMenu.classList.remove("active");
    })
);

//JS for generation of bar content

let barGuide = document.getElementById("bar-guide");

let generateBarGuide = () => {
  return (barGuide.innerHTML = barData
    .map((x) => {
      let { id, name, description, summary, img } = x;
      return `
            <section id="${id}" class="individual-bar-content">
                <figure class="bar-image-container">
                    <img src="${img}" alt="">
                </figure>
                <article class="bar-name-container">
                    <p class="bar-name-heading">${name}</p>
                </article>
                <div class="bar-information-wrapper">
                    <article class="bar-description">${description}</article>
                    <aside class="bar-summary">${summary}</aside>
                </div>
                <nav class="button-bar">
                    <button class="button-link">Go to website</button>
                    <button class="button-link">Reviews</button>
                </nav>
                    <iframe class="google-adsense-container-mobile" src="" frameborder="0">
                </iframe>
            </section>
        `;
    })
    .join(""));
};

generateBarGuide();
