DOMStrings = {
    main: document.querySelector('.about'),
    btn1: document.querySelector('.btn__main--1'),
    btn2: document.querySelector('.btn__main--2'),
    btn3: document.querySelector('.btn__main--3'),
}

// const printLetters = (target, message, speed) => {
//     let i = 0;
//     const interval = setInterval(() => {
//         document.querySelector(target).innerHTML += message.charAt(i);
//         i++;
//         if (i > message.length) {
//             clearInterval(interval);
//         }
//     }, speed);
// };

const clearSection = () => {

    DOMStrings.main.innerHTML = "";
};

const insertAbout = () => {

    const markup = `
    <div class="about__text">I am an adaptive person looking to further my career in software development. I have spent the last year learning and applying technical knowledge to accomplish tasks at work, particularly using Python to make API calls to services, web-scraping, cleaning, storing and displaying data. I have thoroughly enjoyed the challenge and have under taken learning Sass/CSS, HTML, and nodeJS/Javascript. I am eager to begin a new challenge and apply myself to new, challenging and different problems.
    <br><br>Life happened and I am losing my contracted position, so I made this page in an effort to prove competency and hopefully land a job. I know it's not world-beating, but I made it in about a day because, as my boss says "don't let perfect the enemy of good". I plan to improve on as the days go by.</div>
    `;

    DOMStrings.main.insertAdjacentHTML('afterbegin', markup);
};

const insertTech = () => {

    const markup = `
    <ul class="knowledge">
        <li>CSS & Sass</li>
        <li>HTML</li>
        <li>Javascript (ES5/6)</li>
        <li>Python 3.x</li>
        <li>PostgreSQL</li>
    </ul>
    `;

    DOMStrings.main.insertAdjacentHTML('afterbegin', markup);
};

const insertHire = () => {

    const markup = `
    <div class="hire__text"> I'm cheap, eager to learn, driven by curiosity and the desire to grow rather than money. I believe in minimal design, and simple, easy to navigate layouts. Having worked for the government and dealt with what can be described using diplomatic language as "horrible websites" I want to make the internet a nicer place, with prettier pages.</div>
    `;

    // printLetters('.about', markup, 30);
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