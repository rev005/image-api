function uploadImageAjax() {
    // Get form
    var form = $('#uploadForm')[0];
    var data = new FormData(form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/uploads",
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
    var data = {
        url: imageObj.url,
        tag: imageObj.tag
    };

    $.ajax({
        type: "POST",
        url: "/api/images",
        data: data,
        success: (data) => {
            //$("#listFiles").text(data);
        },
        error: (e) => {
            //$("#listFiles").text(e.responseText);
        }
    });
}