$( document ).ready(function() {
    initTelMailto();

    jQuery('#gallery_slideshow').camera({
        fx: 'scrollHorz',
        pagination: false,
        mobileNavHover: false
    });

    resizeMainBanner();
    window.onresize = resizeMainBanner;
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

    if(jumbotron!==undefined){
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
