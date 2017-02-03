import $ from 'jquery';

var ProductTileHoverEffect = function(){
  $('.product-tile').on('mouseenter', event=>{
    $('.product-tile').not($(event.target).closest('.product-tile')).addClass('product-tile--no-hover');
  });
  $('.product-tile').on('mouseleave', function(){
    $('.product-tile').removeClass('product-tile--no-hover');
  });
};

export default ProductTileHoverEffect;
