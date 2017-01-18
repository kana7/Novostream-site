import $ from 'jquery';

class ProductServicesDisplay {

    constructor(element) {
        this.service = element;
        this.input = this.service.find('input[type="radio"]');
        this.details = this.service.find('.product-services__details');
        this.events();
    }

    events() {
        this.input.on('change', this.toggleDetailsDisplay.bind(this));
    }

    toggleDetailsDisplay() {
        if(this.input.filter(':checked').val() === "true"){
          this.details[0].style.maxHeight = this.details.prop('scrollHeight') + 'px'
          this.details.addClass('product-services__details--is-open');
        }else{
          this.details[0].style.maxHeight = null;
          this.details.removeClass('product-services__details--is-open');
        }
    }
}

export default ProductServicesDisplay;
