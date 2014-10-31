/**
 * Problem: sometimes your search bar isn't loaded right after document.ready, and you need it to init
 * Solution: use a hover state on the parent element, to setup your initilization call.  once you see it,
 *           it can be initialized.
 */
$(document).ready(function(){
    // attach search slider to the default search in main nav area
    $('#headerSearch').hover(function(){
        var settings = {
            animationStyle: "slide",
            animationTiming: 100,
            direction: "right",
            closedWidth: "0px",
            openWidth: "250px"
        };
        $('#gsc-iw-id1').SearchSlider(settings);
    },function(){
        $('#gsc-iw-id1').parent().parent().find('.gsc-search-button').click(function(){
            $('#gsc-iw-id1').data('SearchSlider').toggle();
            $('#gsc-iw-id1').on( "focusout",function(){$(this).data('SearchSlider').slideClosed();});
        });
        // remove the headerSearch listener.  this is only used to initialize once it is visible
        $('#headerSearch').unbind('hover');
    });
    
});
