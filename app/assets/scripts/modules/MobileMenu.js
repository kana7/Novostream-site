import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $('.page-wrapper');
        this.menuIcon = $('.site-header__menu-icon');
        this.events();
    }
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    toggleTheMenu() {
        this.siteHeader.toggleClass("page-wrapper--open-mobile-menu");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;
