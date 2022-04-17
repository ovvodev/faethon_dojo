/*function isMobile() {
	try { document.createEvent("TouchEvent"); return true; }
	catch (e) { return false; }
} */
function playerInterval(){
	jQuery('.equalizer span').each(function(){
	  jQuery(this).css('height', Math.floor((Math.random() * 20) + 2));
	});
  }


function mobileAudio(){
	
	var play = true;
	var player = jQuery('.equalizer span').css('height',2);
	
	
	if(navigator.userAgent.match(/Mobi/)){
		
		
		jQuery('.player').click(function(){
			  if(play){
			    player = setInterval(playerInterval, 400); 
			    $("#playButton").html("PAUSE");
				document.getElementById('music').pause();
				play = false; 
				} 
				else {
				clearInterval(player);
			    player = jQuery('.equalizer span').css('height',2);
			    $("#playButton").html("&nbsp;PLAY&nbsp;&nbsp;");
			    document.getElementById('music').play();
			    play = true;
			}
		});
		} else{
			
			player = setInterval(playerInterval, 400);
			$("#playButton").html("PAUSE");
			document.getElementById('music').play();
			
			jQuery('.player').click(function(){
			  if(play){
			    clearInterval(player);
			    jQuery('.equalizer span').css('height',2);
			    $("#playButton").html("&nbsp;PLAY&nbsp;&nbsp;");
			    document.getElementById('music').pause();
			    play = false;
			  } else {
			    play = true;
			    $("#playButton").html("PAUSE");
			    player = setInterval(playerInterval, 400);
			    document.getElementById('music').play();
			}
		});
	}
}



$( document ).ready(function() {
    mobileAudio();
});

