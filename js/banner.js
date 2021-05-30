var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
function slideSwitch1() {
    var $active = $('#slideshowHome DIV.active');
    if ( $active.length == 0 ) $active = $('#slideshowHome DIV:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshowHome DIV:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}
$(function() {
    setInterval( "slideSwitch1()", 3500 );
});


// JavaScript Document
function slideSwitch2() {
    var $active = $('#slideshowInner DIV.active');
    if ( $active.length == 0 ) $active = $('#slideshowInner DIV:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshowInner DIV:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}
$(function() {
    setInterval( "slideSwitch2()", 3500 );
});






}
/*
     FILE ARCHIVED ON 06:24:09 Jan 26, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:00:05 May 26, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 107.971 (3)
  load_resource: 1357.344 (2)
  exclusion.robots: 0.201
  PetaboxLoader3.datanode: 199.666 (5)
  esindex: 0.013
  PetaboxLoader3.resolve: 1251.53 (2)
  exclusion.robots.policy: 0.187
  CDXLines.iter: 25.288 (3)
  RedisCDXSource: 3.364
  captures_list: 141.308
*/