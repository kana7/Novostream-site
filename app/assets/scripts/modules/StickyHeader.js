import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".scroll-header-trigger");
        this.createHeaderWayPoint();
    }

    refreshWaypoints() {
      this.lazyImages.load(function() {
        Waypoint.refreshAll();
      });
    }

    createHeaderWayPoint() {
        var that = this;
        new Waypoint({
            element: that.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--minimize");
                    alert('minimize!!!');
                } else {
                  alert('NOT minimize!!!');
                    that.siteHeader.removeClass("site-header--minimize");
                }
            }
        });
    }
}

export default StickyHeader;
