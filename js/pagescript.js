$( document ).ready(function() {
    initTelMailto();

    resizeMainBanner();
    window.onresize = resizeMainBanner;
    
    $('[data-toggle="popover"]').popover();

    /*jQuery('#gallery_slideshow').camera({
        fx: 'scrollHorz',
        pagination: false,
        mobileNavHover: false
    });*/

});

function initTelMailto(){
    var tel = document.getElementsByClassName('tag_tel');
    var mailto = document.getElementsByClassName('tag_mailto');

    for(el in tel){
        tel[el].innerHTML = '<a href="tel:+4940405245">040 / 405245</a>';
    }
    for(el in mailto){
        mailto[el].innerHTML = '<a href="mailto:info@gitarrenunterrichtineimsbuettel.de">info@gitarrenunterrichtineimsbuettel.de</a>';
    }
}

function resizeMainBanner(){
    var jumbotron = document.getElementById('jumbotron-main');

    if(jumbotron){
        //Jumbotron
        var bodyStyle = window.getComputedStyle(document.body);

        var body_padding_top = parseInt(bodyStyle.getPropertyValue('padding-top'));
        var window_height = window.innerHeight;

        var calculatedSize = window_height-body_padding_top;


        //Jumbotron Inner
        var jumbotron_inner = document.getElementById('jumbotron-main-inner');
        var jumbotron_inner_height = $('#jumbotron-main-inner').height();
        var calculatedMargin = (calculatedSize/2)-(jumbotron_inner_height);


        //Apply
        jumbotron.style.height = calculatedSize.toString()+"px";
        jumbotron_inner.style.marginTop = calculatedMargin.toString()+"px";
    }
}

function initGmaps() {
    var myOptions = {
        zoom:17,center:new google.maps.LatLng(53.57642999999999,9.946459900000036),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    mapElement = document.getElementById('gmapsElement');
    if(!mapElement)
        return;

    map = new google.maps.Map(mapElement, myOptions);

    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(53.57642999999999,9.946459900000036)});
    
    infowindow = new google.maps.InfoWindow({content:'<strong>Bernhard Welling</strong><br>Sillemstrasse 40<br>20257 Hamburg<br>'});
    
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    
    infowindow.open(map,marker);
}
