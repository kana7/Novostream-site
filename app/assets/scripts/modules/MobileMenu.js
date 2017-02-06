import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.page-wrapper');
    this.menuIcon = $('.site-header__menu-icon');
    this.mobileSideBar = $('.mobile-side-menu');
    this.mobileMenu = this.mobileSideBar.find('ul.menu');
    this.menuItems = this.mobileMenu.find('li.menu-item');
    this.menuLinks = this.mobileSideBar.find('ul.menu-links');
    this.backButtons = this.menuLinks.find('.back');
    this.currentSubMenu;
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.menuItems.on('click', this.showSubMenu.bind(this));
    this.backButtons.on('click', this.hideSubMenu.bind(this));
  }
  toggleTheMenu() {
    this.siteHeader.toggleClass("page-wrapper--open-mobile-menu");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
  showSubMenu(event){
    console.log(event);
    var element = $(event.target);
    if (element.attr('data-id')) {
      this.currentSubMenu = this.getSubMenu(element.attr('data-id'));
      this.currentSubMenu.closest('.menu-links-wrapper').addClass('is-open');
    }
  }
  hideSubMenu(){
    if (typeof this.currentSubMenu !== null) {
      this.currentSubMenu.closest('.menu-links-wrapper').removeClass('is-open');
      this.currentSubMenu = null;
    }
  }
  getSubMenu(id){
    var temp;
    this.menuLinks.each(function () {
      if ($(this).attr('id') === id) {
        temp = $(this);
        return false;
      }
    });
    return temp;
  };
}

export default MobileMenu;
