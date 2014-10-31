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
        console.log('loading searchbutton listener');
        $('#gsc-iw-id1').parent().parent().find('.gsc-search-button').click(function(){
            $('#gsc-iw-id1').data('SearchSlider').toggle();
            $('#gsc-iw-id1').on( "focusout",function(){$(this).data('SearchSlider').slideClosed();});
        });
        
        $('#headerSearch').unbind('hover');
    });
    
});
