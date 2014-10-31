$.fn.SearchSlider = function(settingsInput){
  var that = this;
  
  var settings = {
    animationStyle: "slide",
    animationTiming: 500,
    direction: "right",
    closedWidth: "0px",
    openWidth: "250px"
  };
  if(settingsInput==undefined){}
  else{
    for (var key in settingsInput) {
      if (settings.hasOwnProperty(key)) {
       settings[key] = settingsInput[key];
      }
    }
  }  
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
        that.css('float',direction);
         that.animate({
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
    function initListeners(settings){
        
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
    that.settings = settings;
    return that;
  });
  
  that.data('SearchSlider', new SearchBarSlider(this,settings));
};
