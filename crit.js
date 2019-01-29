$(window).scroll(function(){
    var windowDiScroll =$(this).scrollTop();
    console.log(windowDiScroll);
 if(windowDiScroll>1076){
    // $("#makanan .card").addClass("tampil");
    $('#news .card').each(function(i){
        setTimeout(
            function(){
                $('#news .card').eq(i).addClass('tampil');
            },
            400 * (i+1));

    });
 }
}
);