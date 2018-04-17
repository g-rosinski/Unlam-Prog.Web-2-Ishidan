		$(document).ready(function(){
			$('.carousel').carousel({
			  interval: 4000
			})
			if ($( window ).width() <767){
				$('.container').addClass('container-fluid');
				$('.container-fluid').removeClass('container');
			}

			$(window).resize(function() {
				var widthBrowser = $( window ).width();
			  	if (widthBrowser<767) {
					$('.container').addClass('container-fluid');
					$('.container-fluid').removeClass('container');			  	
			 	}
			 	else{
					$('.container-fluid').addClass('container');
			 		$('.container').removeClass('container-fluid');
			 	}

			});
			 	
		});