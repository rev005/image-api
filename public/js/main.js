var myApp = {};

$(document).ready(function () {
    $('#uploadSubmit').on('click', function (e) {
        e.preventDefault();
        console.log('Submit clicked');
        uploadImage();
    });

    $('#upload').on('click', function (e) {
        e.preventDefault();
        $('#uploadImage').trigger('click');
    });

    $('body').on('click', '.bookCover', function(){
        // location.replace('/pages');
        // let bookId = $(this).attr('data-id');
        // let book = Object.values(myApp.images).find(x => x._id===bookId);
        // let pages = book.pageUrls;
        // console.log(pages);

        // var test='';
        // pages.forEach(page => {
        //     let html = `<div class='col-lg-2 col-md-3 col-sm-6'>
        //                     <img src="./img/${page}" alt="No Image" class="bookPage img-fluid img-thumbnail" data-id="${bookId}">
        //                 </div>`
        //     test += html;
        // });

        // $('.booksList').html(test);
    });

    imageGetMongo();
});