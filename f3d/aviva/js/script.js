$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',

		'afterLoad': function(anchorLink, index){
			if(index == 2) {
				$(function(){
				  $("#doughnutChart").drawDoughnutChart([
				    { title: "One-off event",   value : 43,   color: "#7A2182" },
				    { title: "Retirement", 		value:  38,   color: "#B90276" },
				    { title: "Other",      		value:  19,   color: "#FF6699" }
				  ]);
				});


				$(".col-middle p").addClass('fadeInUp');

				$(".statistic-right").addClass('fadeInLeft');
				$("#bride").addClass('fadeInLeft');

				$(".statistic-left").addClass('fadeInRight');
				$("#retired-lady").addClass('fadeInRight');
			}
			else {
				$(function(){
				  $("#doughnutChart").drawDoughnutChart([
				    { value : 0 },
				    { value:  0 },
				    { value:  0 }
				  ]);
				});				
			}
			if(index == 3) {	
				$(".bar").css('width','47%');
				$(".table .statistic-right").addClass('fadeInLeft');
				// $(".cake").addClass('bounceInLeft');
				// $(".cake").css('opacity', '1');

				var decimal_places = 3;
				var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
				$('#animateNumber')
				  .animateNumber(
				    {
				      number: 22500,

				      numberStep: function(now, tween) {
				        var floored_number = Math.floor(now) / decimal_factor,
				            target = $(tween.elem);

				        if (decimal_places > 0) {
				          // force decimal places even if they are 0
				          floored_number = floored_number.toFixed(decimal_places);

				          // replace '.' separator with ','
				          floored_number = floored_number.toString().replace('.', ',');
				        }
				        target.text('£' + floored_number);
				      }
				    },
				    1000
				  );
			}
		}
	});
});	


