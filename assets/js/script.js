$(document).ready(function(){
    function wResize(e) {
        var target = e.target || e;
        windowWidth = target.innerWidth + "px";
        // windowHeight = target.innerHeight + "px";
        console.log(windowWidth);
    }

    $('#selengkapnya').click(function() {
        $('.deskripsi').removeClass('shrinked');
        $('.deskripsi-overlay').css('display', 'none');
    });

    $(window).resize(wResize);

    wResize(window);
});