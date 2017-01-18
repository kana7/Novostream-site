import BottomSlider from './modules/BottomSlider';
import ProductTileHoverEffect from './modules/ProductTileHoverEffect';
import StickyHeader from './modules/StickyHeader';
import ProductServicesDisplay from './modules/ProductServicesDisplay';
import $ from 'jquery';

$('.aid').each(function(){
  new BottomSlider($(this));
});
if($('.product-tile')){
  ProductTileHoverEffect();
}
var stickyHeader = new StickyHeader();

$('.product-services__item').each(function(){
  new ProductServicesDisplay($(this));
});
