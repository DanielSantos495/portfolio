const burgerMenuDisable = () => {


    const homeLi = document.getElementById('home-li');
    const portfolioLi = document.getElementById('portfolio-li');
    const aboutLi = document.getElementById('about-li');
    const contacLi = document.getElementById('contact-li');

    homeLi.style.display = 'flex';
    portfolioLi.style.display = 'flex';
    aboutLi.style.display = 'flex';
    contacLi.style.display = 'flex';


}

export default burgerMenuDisable;