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

///////////////////////////////////////////////////////////////////////
// imageScroller (1.1), Copyright (C) 2008 - 2009 Max Kiusso
//
// Autor :		Max Kiusso - kiussoATgmailDOTcom
// Date :		2008 12 01
// Modified:	2009 11 23
//
// REQUIRES jQuery 1.2+ <http://jquery.com/>
//
// Features:
// 		This software provide to create a multidirectional image
//		scroller with mouse events
//
// Configuration:	$( "#div" ).imageScroller( {options} )
//					
//					options:	speed (millisecond)
//								loading (text)
//								direction (left, right, top, bottom)
//
// New in release 1.1:
//		- bug fix for preload images
///////////////////////////////////////////////////////////////////////

( function( $ ) {
	$.fn.imageScroller = function ( options ) {
		return this.each( function() {
			var $this = $( this );
			var loadImgs = 0;
			
			var opt = $.extend( 
				{ 
					  speed: "500"
					, loading: "Loading images..." 
					, direction: "left"
				}
				, options || {}
			);
			
			$this.children().hide();
			$this.append(
				"<div style='clear:both; padding: 0px; margin: 0px;'>" + 
				"<div id='loading'>" + opt.loading + "</div>" + 
				"</div>"
			);
			
			$( "img" , $this ).each(
				function () {
					var img = new Image();
					var soc = $( this ).attr( 'src' );
					
					$( img ).load(
						function () {
							loadImgs++;
						}
					).attr( "src" , soc );
				}
			);
			
			var intVal = window.setInterval(
				function () {
					if ( loadImgs == $( "img" , $this ).length ) {
						window.clearInterval( intVal );
						$( "#loading" ).remove();
						$this.children().show();
						var totImg = 0;
			
						$.each(
							  $this.children( ":not(div)" )
							, function () {
								switch ( opt.direction ) {
									case 'left':
									case 'right':
										if ( $( this ).children().length ) {
											$( this ).width( $( this ).children( ":eq(0)" ).width() );
										}
										totImg += $( this ).width();
										break;
									case 'top':
									case 'bottom':
										$( this ).css( "display" , "block" );
										if ( $( this ).children().length ) {
											$( this ).height( $( this ).children( ":eq(0)" ).height() );
										}
										totImg += $( this ).height();
										break;
								}
								
								$( this ).css({
									  margin:  "0px"
									, padding: "0px"
									, clear:   "both"
								});
								
								$( this ).bind(
									  "mouseover"
									, function () {
										$( "div:eq(0)" , $this ).stop();
									}
								).bind(
									  "mouseout"
									, function () {
										scrollStart( $( "div:eq(0)" , $this ) , opt );
									}
								);
								
								$( "div:eq(0)" , $this ).append( $( this ) );
							}
						);
						
						switch ( opt.direction ) {
							case 'left':
								$( "div:eq(0)" , $this ).css( "width" , totImg + "px" );
								break;
							
							case 'right':
								$( "div:eq(0)" , $this ).css( "width" , totImg + "px" );
								$( "div:eq(0)" , $this ).css({
									marginLeft: -( totImg - $this.width() ) + "px"
								});
								break;
								
							case 'top':
								$( "div:eq(0)" , $this ).css( "height" , totImg + "px" );
								break;
								
							case 'bottom':
								$( "div:eq(0)" , $this ).css( "height" , totImg + "px" );
								$( "div:eq(0)" , $this ).css({
									marginTop: -( totImg - $this.height() ) + "px"
								});
								break;
						}
	
						scrollStart( $( "div:eq(0)" , $this ) , opt );
					}
				}
				, 100
			);
			
			function scrollStart ( $scroll , opt ) {
				switch ( opt.direction ) {
					case 'left':
						var pos = -( $scroll.children( ":eq(0)" ).width() );
						var spd = opt.speed - ( Math.abs ( parseInt( $scroll.css( "marginLeft" ) ) ) * ( opt.speed / $scroll.children( ":eq(0)" ).width() ) );
						break;
						
					case 'right':
						var pos = -( $scroll.width() - $scroll.parents( "div:eq(0)" ).width() ) + $scroll.children( ":last" ).width();
						var spd = opt.speed - ( ( $scroll.children( ":last" ).width() - ( Math.abs ( parseInt( $scroll.css( "marginLeft" ) ) ) - Math.abs ( pos ) ) ) * ( opt.speed / $scroll.children( ":last" ).width() ) );
						break;
						
					case 'top':
						var tos = -( $scroll.children( ":eq(0)" ).height() );
						var spd = opt.speed - ( Math.abs ( parseInt( $scroll.css( "marginTop" ) ) ) * ( opt.speed / $scroll.children( ":eq(0)" ).height() ) );
						break;
						
					case 'bottom':
						var tos = -( $scroll.height() - $scroll.parents( "div:eq(0)" ).height() ) + $scroll.children( ":last" ).height();
						var spd = opt.speed - ( ( $scroll.children( ":last" ).height() - ( Math.abs ( parseInt( $scroll.css( "marginTop" ) ) ) - Math.abs ( tos ) ) ) * ( opt.speed / $scroll.children( ":last" ).height() ) );
						break;
				}
				
				$scroll.animate(
					{
						  marginLeft: ( pos || "0" ) + "px"
						, marginTop: ( tos || "0" ) + "px"
					}
					, spd
					, "linear"
					, function () {
						switch ( opt.direction ) {
							case 'left':
								$scroll.append( $( this ).children( ":eq(0)" ) );
								$scroll.css( "marginLeft" , "0px" );
								break;
								
							case 'right':
								$scroll.prepend( $( this ).children( ":last" ) );
								$scroll.css( "marginLeft" , -( $scroll.width() - $scroll.parents( "div:eq(0)" ).width() ) + "px" );
								break;
								
							case 'top':
								$scroll.append( $( this ).children( ":eq(0)" ) );
								$scroll.css( "marginTop" , "0px" );
								break;
								
							case 'bottom':
								$scroll.prepend( $( this ).children( ":last" ) );
								$scroll.css( "marginTop" , -( $scroll.height() - $scroll.parents( "div:eq(0)" ).height() ) + "px" );
								break;
						}
						
						scrollStart( $scroll , opt );
					}
				);
			};
		});
	};
})(jQuery);

$(
	function () {
		$( "#left" ).imageScroller( {speed:'15000', direction:'left'} );
	}
)

}
/*
     FILE ARCHIVED ON 21:44:39 Jan 25, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:00:05 May 26, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 82.601 (3)
  load_resource: 1519.367 (2)
  exclusion.robots: 0.195
  PetaboxLoader3.datanode: 159.652 (5)
  esindex: 0.011
  PetaboxLoader3.resolve: 1406.785 (2)
  exclusion.robots.policy: 0.18
  CDXLines.iter: 19.826 (3)
  RedisCDXSource: 3.396
  captures_list: 109.379
*/