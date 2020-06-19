import '../scss/index.scss'
import burgerMenu from './events/burgerMenu'
import burgerMenuDisable from './events/burgerMenuDisable'

const querie = matchMedia('(min-width: 1023px)');
const disactiveAnimationWithQuerie = querie => {

    if (querie.matches) {

        burgerMenuDisable();

    }
}
querie.addListener(disactiveAnimationWithQuerie);
disactiveAnimationWithQuerie(querie);

burgerMenu();