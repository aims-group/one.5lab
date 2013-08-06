$(document).ready(function() 
{ 			  	
	Shadowbox.init();	
	
	$('#llnl-menu-tab').click(function(e)
	{
		$('#llnl-menu').slideToggle('fast');
		$(this).toggleClass('open');
			
		e.preventDefault();
	});	
	$('#myCarousel').carousel({
	  interval: 10000
	});
	$('#llnl-menu-carousel').carousel({
		interval: false
	});
	$('#llnlseachtoggle').change(function() {		  
		if(this.checked) 
		{
        	$(".llnlpeoplesearch").hide("fast");	
			$(".llnlsitesearch").show("fast");					
    	}				
		else
		{
			$(".llnlsitesearch").hide("fast");
			$(".llnlpeoplesearch").show("fast");				
		}	
	});
	$('.carousel-bullets a').click(function(q){
		q.preventDefault();
		targetSlide = $(this).attr('data-to')-1;
		$('#myCarousel').carousel(targetSlide);
	});		
	$('#myCarousel').bind('slid', function() {
		// Get currently selected item
		var item = $('#myCarousel .carousel-inner .item.active');
	
		// Deactivate all nav links
		$('.carousel-bullets a').removeClass('active');
	
		// Index is 1-based, use this to activate the nav link based on slide
		var index = item.index() + 1;
		$('.carousel-bullets a:nth-child(' + index + ')').addClass('active');
	});
	
	
	$('[rel="tooltip"]').tooltip(); 
	$('[rel="popover"]').popover();
	$('[rel="modal"]').modal();
	$('[rel="collapse"]').collapse(); 

	$('a[data-toggle="tab"]').on('shown', function (e) {
    e.target;
    e.relatedTarget;
  });

  // start headlines feed
  var userinfo_url = 'media/classes/newsfeed.php';

  $.ajax({
    type: "POST",
    url: userinfo_url,
    async: true,
    cache: false,
    data: {},
    dataType: 'json',
    success: function(data) {
      if(data.a == 'success'){
        var fullString = data.b;
        var arrayString = fullString.split('][');
        for(var i = 1; i < arrayString.length; i++){
          var arrayStringParts = arrayString[i].split('|');
          $('#headlines').append("<p><a href='" + arrayStringParts[0] + "'>" +  arrayStringParts[1] + "</a><br/>" + arrayStringParts[2] + "</p>");
        }
      }
      else{
        var error = data.b;
          $('#headlines').append("<p>" + error + "</p>");
      }
    },
    error: function(request, status, error) {
      $('#headlines').append("error: " + error + "<br/> status -> " + status + "<br/> request -> " + request);
    }
  });
  // end headlines feed
				
});

    
function sizewin(url,w,h) {
	var width=w;
	var height=h;
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	var toolbar='no';
	var location='no';
	var directories='no';
	var status='no';
	var menubar='no';
	var scrollbars='yes';
	var resizable='yes';
	var atts='width='+width+'show,height='+height+',top='+top+',screenY=';
	atts+= top+',left='+left+',screenX='+left+',toolbar='+toolbar;
	atts+=',location='+location+',directories='+directories+',status='+status;
	atts+=',menubar='+menubar+',scrollbars='+scrollbars+',resizable='+resizable;
	window.open(url,'win_name',atts);     
}

function expandPerson(id) {
  $("#person-details").hide('drop', function() {
    $.ajax({
      url: "people.php?id=" + id,
    }).done(function(response) {
      $("#person-details").html(response);
    });
    $("#person-details").show('drop');
  });
}

