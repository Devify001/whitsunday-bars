let barGuide = document.getElementById("bar-guide")

let generateBarGuide = () => {
    return (barGuide.innerHTML = barData.map((x) => {
        let { id, name, description, summary, img } = x
        return `
            <section id="${id}" class="individual-bar-content">
                <figure class="bar-image-container">
                    <img src="${img}" alt="">
                </figure>
                <article class="bar-name-container">
                    <p class="bar-name-heading">${name}</p>
                </article>
                <article class="bar-description">${description}</article>
                <aside class="bar-summary">${summary}</aside>
                <nav class="button-bar">
                    <button class="button-link">Go to website</button>
                    <button class="button-link">Reviews</button>
                </nav>
                    <iframe class="google-adsense-container-mobile" src="" frameborder="0">
                </iframe>
            </section>
        `
    })
    .join(""))
}

generateBarGuide()