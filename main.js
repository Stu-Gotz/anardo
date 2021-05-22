DOMStrings = {
    main: document.querySelector('.about'),
    btn1: document.querySelector('.btn__main--1'),
    btn2: document.querySelector('.btn__main--2'),
    btn3: document.querySelector('.btn__main--3'),
}

const clearSection = () => {

    DOMStrings.main.innerHTML = "";
};

const insertAbout = () => {

    const markup = `
    <div class="about__text mode-light"></div>
    <div class="about__text">I am an adaptive person looking to further my career in software development. I have spent the last year learning and applying technical knowledge to accomplish tasks at work, particularly using Python to make API calls to services, web-scraping, cleaning, storing and displaying data. I have thoroughly enjoyed the challenge and have under taken learning Sass/CSS, HTML, and nodeJS/Javascript. I am eager to begin a new challenge and apply myself to new, challenging and different problems.</div>
    `;

    DOMStrings.main.insertAdjacentHTML('afterbegin', markup);
};

const insertTech = () => {

    const markup = `
    <ul class="skills mode-light">
        <li><a class="skills__item mode-light" href="https://github.com/Stu-Gotz/solarsystem">CSS & Sass</a></li>
        <li><a class="skills__item mode-light" href="">HTML</a></li>
        <li><a class="skills__item mode-light" href="https://github.com/Stu-Gotz/usage_server">Javascript (ES5/6)</a> & <a class="skills__item" href="https://github.com/Stu-Gotz/pkmneval">Vue</a></li>
        <li><a class="skills__item mode-light" href="https://github.com/Stu-Gotz/smog_usage_stats">Python 3.x</a></li>
        <li>PostgreSQL</li>
        <li><a class="skills__item mode-light" href="https://github.com/Stu-Gotz/shrektime">Silly sense of humour</a></li>
    </ul>
    `;

    DOMStrings.main.insertAdjacentHTML('afterbegin', markup);
};

const insertHire = () => {

    const markup = `
    <div class="hire__text"></div>
    `;

    DOMStrings.main.insertAdjacentHTML('afterbegin', markup);
}

DOMStrings.btn1.addEventListener('click', () => {
    clearSection();
    insertAbout();
});

DOMStrings.btn2.addEventListener('click', () => {
    clearSection();
    insertTech();
});

DOMStrings.btn3.addEventListener('click', () => {
    clearSection();
    insertHire();
});