

let generateBarGuideDiningFilter = () => {
  result = []
  result = barData.filter((x) => x.hasDining === true);
  return (barGuide.innerHTML = result
    .map((x) => {
      let {
        id,name,location,description,img,mon,tue,wed,thur,fri,sat,sun,type,hasDining,dining,ages,hasSmoking,smoking,hasGambling,gambling,hasMusic,music,hasSports,sports,rating,maps,} = x;
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
                    <aside class="bar-summary">
                        <h4>LOCATION:</h4>
                        <p class="location">${location}</p>
                        <h4>OPENING HOURS:</h4>
                        <p>Monday: ${mon}</p>
                        <p>Tuesday: ${tue}</p>
                        <p>Wednesday: ${wed}</p>
                        <p>Thursday: ${thur}</p>
                        <p>Friday: ${fri}</p>
                        <p>Saturday: ${sat}</p>
                        <p>Sunday: ${sun}</p>
                        <h4>VENUE TYPE:</h4>
                        <p>${type}</p>
                        <h4>DINING AVAILABLE:</h4>
                        <p>${dining}</p>
                        <h4>TYPICAL AGES:</h4>
                        <p>${ages}</p>
                        <h4>SMOKING AREA:</h4>
                        <p>${smoking}</p>
                        <h4>GAMBLING:</h4>
                        <p>${gambling}</p>
                        <h4>LIVE MUSIC:</h4>
                        <p>${music}</p>
                        <h4>SPORTS:</h4>
                        <p>${sports}</p>
                        <h4>POOL TABLES:</h4>
                        <p>${pool}</p>
                        <h4>CUSTOMER RATING:</h4>
                        <p>${rating}/5</p>
                        <br>
                            <a class="google-maps-link" href="${maps}" target="_blank">
                                <div class="google-maps">
                                    <img src="images/address-icon.png" alt="" width="20" height="20">
                                    <p class="find-on-google-p">Find on Google Maps</p>
                                </div>
                            </a>
                    </aside>
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

let generateBarGuideGamblingFilter = () => {
  result = [];
  result = barData.filter((x) => x.hasGambling === true);
  return (barGuide.innerHTML = result
    .map((x) => {
      let {id,name,location,description,img,mon,tue,
        wed,thur,fri,sat,sun,type, dining,ages,smoking,gambling,music,sports,
        rating,maps,} = x;
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
                    <aside class="bar-summary">
                        <h4>LOCATION:</h4>
                        <p class="location">${location}</p>
                        <h4>OPENING HOURS:</h4>
                        <p>Monday: ${mon}</p>
                        <p>Tuesday: ${tue}</p>
                        <p>Wednesday: ${wed}</p>
                        <p>Thursday: ${thur}</p>
                        <p>Friday: ${fri}</p>
                        <p>Saturday: ${sat}</p>
                        <p>Sunday: ${sun}</p>
                        <h4>VENUE TYPE:</h4>
                        <p>${type}</p>
                        <h4>DINING AVAILABLE:</h4>
                        <p>${dining}</p>
                        <h4>TYPICAL AGES:</h4>
                        <p>${ages}</p>
                        <h4>SMOKING AREA:</h4>
                        <p>${smoking}</p>
                        <h4>GAMBLING:</h4>
                        <p>${gambling}</p>
                        <h4>LIVE MUSIC:</h4>
                        <p>${music}</p>
                        <h4>SPORTS:</h4>
                        <p>${sports}</p>
                        <h4>POOL TABLES:</h4>
                        <p>${pool}</p>
                        <h4>CUSTOMER RATING:</h4>
                        <p>${rating}/5</p>
                        <br>
                            <a class="google-maps-link" href="${maps}" target="_blank">
                                <div class="google-maps">
                                    <img src="images/address-icon.png" alt="" width="20" height="20">
                                    <p class="find-on-google-p">Find on Google Maps</p>
                                </div>
                            </a>
                    </aside>
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
