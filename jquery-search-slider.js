$.fn.SearchSlider = function(){
  var that = this;
  var settings = {
        animationStyle: "slide",
        animationTiming: 500,
        direction: "right",
        closedWidth: "0px",
        openWidth: "250px"
  };
  
  var SearchBarSlider = (function(el,settings){
    var that = el;
    that.listeners = new Array();
    that.watchers = new Array();
    
    function slideOpen(openWidth){
        if(openWidth==undefined){
            openWidth=settings.openWidth;
        }
         that.animate({
              width: openWidth
          });
          return 1;
    } 
    function slideClosed(direction){
        if(direction==undefined){
            direction = "right";
        }
         that.animate({
             float:direction,
              width: settings.closedWidth
              
          });
          return 1;
    }
    function toggle(){
        if(that.width()+"px"==settings.closedWidth){
            that.slideOpen();
            return 1;
        }else{
            that.slideClosed();
            return 0;
        }
    }
    function initListeners(){
         
         return 1;
    }
    function registerListener(listener){
        that.listeners.push(watcher); 
        return 1;
    }
    function registerWatcher(watcher){
        that.watchers.push(watcher);
        return 1;
    }
    that.slideOpen = slideOpen;
    that.slideClosed = slideClosed;
    that.toggle = toggle;
    that.registerListener = registerListener;
    that.init = initListeners;
    return that;
  });
  
  that.data('SearchSlider', new SearchBarSlider(this,settings));
};

// google custom search bar implementation
$('#gsc-iw-id1').SearchSlider();
$('#gsc-iw-id1').click(function(){
    $('#gsc-iw-id1').data('SearchSlider').toggle();
    $('#gsc-iw-id1').on( "focusout",function(){$(this).data('SearchSlider').slideClosed();});
});
