$(document).ready(function () {
    // init Masonry
    // var $grid = $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true
    // });

    // // layout Masonry after each image loads
    // $grid.imagesLoaded().progress(function () {
    //     $grid.masonry('layout');
    // });

    $('.grid').imagesLoaded(function () {
        // init Masonry after all images have loaded
        gridReset();
    });

    $('#setGrid').on('change', function(){
        var percentage = $(this).val();
        $('.grid-sizer,.grid-item').css('width', percentage +'%');
        gridReset();
    });
});

function gridReset(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
}