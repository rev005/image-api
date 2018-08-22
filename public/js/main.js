$(document).ready(function () {
    $('.grid').imagesLoaded(function () {
        gridReset(); // init Masonry after all images have loaded.
    });

    $('#setGrid').on('change', function () {
        var percentage = $(this).val();
        $('.grid-sizer,.grid-item').css('width', percentage + '%');
        gridReset();
    });

    $('#uploadSubmit').on('click', function (e) {
        e.preventDefault();
        console.log('Submit clicked');
        uploadImage();
    });

    $('#upload').on('click', function (e) {
        e.preventDefault();
        $('#uploadImage').trigger('click');
    });

    imageGetMongo();
});

function gridReset() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
}


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