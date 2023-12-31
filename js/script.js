import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
// import initModal from "./modules/modal.js";
// import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchHoras from "./modules/fetch-horas-cursos.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import SlideNav from './modules/slide.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
// initModal();
// initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchHoras()
initFetchBitcoin()

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');