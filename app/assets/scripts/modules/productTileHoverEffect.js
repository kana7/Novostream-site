import $ from 'jquery';

var productTileHoverEffect = (function(){
  $('.product-tile').on('mouseenter', event=>{
    $('.product-tile').not($(event.target).closest('.product-tile')).addClass('product-tile--no-hover');
  });
  $('.product-tile').on('mouseleave', ()=>{
    $('.product-tile').removeClass('product-tile--no-hover');
  });
})();

export default productTileHoverEffect;
