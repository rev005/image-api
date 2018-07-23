function uploadImageAjax() {
    // Get form
    var form = $('#uploadForm')[0];
    var data = new FormData(form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "api/uploads",
        data: data,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        contentType: false,
        cache: false,
        success: (data) => {
            console.log(data);
            $(data).each((i, e) => {
                var imageObj = {
                    url: e.filename //TODO add other data to store later.
                };
                imagePostMongo(imageObj);
            });
        },
        error: (e) => {}
    });
}

function imagePostMongo(imageObj) {

    $.ajax({
        type: "POST",
        url: "/api/images",
        data: imageObj,
        success: (data) => {},
        error: (e) => {}
    });
}