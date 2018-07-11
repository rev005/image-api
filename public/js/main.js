$(document).ready(function () {
    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
});

// $(document).ready(function () {
//     $('.lol').submit(function (event) {
//         event.preventDefault();
//         var files = document.getElementById('uImg').files;
//         var filesArr = [];

//         test(files);
//         // for (var i = 0; i < files.length; i++) {
//         //     console.log(files[i]);
//         //     var formData = new FormData(files[i]);
//         //     console.log(formData);
//         //     $.ajax({
//         //         url: '/uploads',
//         //         data: files[i],
//         //         type: "POST",
//         //         // mimeType: "multipart/form-data",
//         //         contentType: false,
//         //         cache: false,
//         //         processData: false,

//         //         success: function (data) {
//         //             console.log(data);
//         //         },
//         //         error: function (data) {
//         //             console.error(data);
//         //         }
//         //     });
//         // }
//         // console.log(filesArr);
//     });
// });

// function test(file) {
//     var formData = new FormData(file);

//     $.ajax({
//         url: '/uploads',
//         data: formData,
//         type: "POST",
//         mimeType: "multipart/form-data",
//         contentType: false,
//         cache: false,
//         processData: false,

//         success: function (data) {
//             console.log(data);
//         },
//         error: function (data) {
//             console.error(data);
//         }
//     });
// }