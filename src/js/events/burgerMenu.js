const burgerMenu = () => {

  const burgerMenu = document.getElementById('header__bm');
  const burgerMenuP1 = document.getElementById('p1');
  const burgerMenuP2 = document.getElementById('p2');
  const burgerMenuP3 = document.getElementById('p3');
  const homeLi = document.getElementById('home-li');
  const portfolioLi = document.getElementById('portfolio-li');
  const aboutLi = document.getElementById('about-li');
  const contacLi = document.getElementById('contact-li');


  function animationBurgerMenu() {

    if (burgerMenuP1.classList.contains('p1')
      && burgerMenuP1.classList.contains('p1')
      && burgerMenuP3.classList.contains('p3')) {

        function changeDisplayNavBar() {

          //Display none items nav bar
          homeLi.style.display = 'none';
          portfolioLi.style.display = 'none';
          aboutLi.style.display = 'none';
          contacLi.style.display = 'none';

          homeLi.removeEventListener('animationend', changeDisplayNavBar);
          portfolioLi.removeEventListener('animationend', changeDisplayNavBar);
          aboutLi.removeEventListener('animationend', changeDisplayNavBar);
          contacLi.removeEventListener('animationend', changeDisplayNavBar);

        }

        //Animation Burger Menu
        burgerMenuP1.classList.remove('p1');
        burgerMenuP2.classList.remove('p2');
        burgerMenuP3.classList.remove('p3');

        burgerMenuP1.classList.add('p1-out');
        burgerMenuP2.classList.add('p2-out');
        burgerMenuP3.classList.add('p3-out');

        //Out items nav bar
        homeLi.classList.add('out');
        portfolioLi.classList.add('out');
        aboutLi.classList.add('out');
        contacLi.classList.add('out');

        //Listener event animatioend to change display a none and it can run the animation
        homeLi.addEventListener('animationend', changeDisplayNavBar);
        portfolioLi.addEventListener('animationend', changeDisplayNavBar);
        aboutLi.addEventListener('animationend', changeDisplayNavBar);
        contacLi.addEventListener('animationend', changeDisplayNavBar);

      } else {

        //Animation Burger Menu
        burgerMenuP1.classList.remove('p1-out');
        burgerMenuP2.classList.remove('p2-out');
        burgerMenuP3.classList.remove('p3-out');

        burgerMenuP1.classList.add('p1');
        burgerMenuP2.classList.add('p2');
        burgerMenuP3.classList.add('p3');

        //Remove out items nav bar
        homeLi.classList.remove('out');
        portfolioLi.classList.remove('out');
        aboutLi.classList.remove('out');
        contacLi.classList.remove('out');

        //In nav items nav bar
        homeLi.style.display = 'list-item';
        portfolioLi.style.display = 'list-item';
        aboutLi.style.display = 'list-item';
        contacLi.style.display = 'list-item';

      }

  }

  burgerMenu.addEventListener('click', animationBurgerMenu);
  homeLi.addEventListener('click', animationBurgerMenu);
  portfolioLi.addEventListener('click', animationBurgerMenu);
  aboutLi.addEventListener('click', animationBurgerMenu);
  contacLi.addEventListener('click', animationBurgerMenu);

}

export default burgerMenu;