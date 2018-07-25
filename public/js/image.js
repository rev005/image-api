function uploadImage() {
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

function imageGetMongo() {
    $.ajax({
        type: "GET",
        url: "/api/images",
        async: false,
        success: (data) => {
            console.log(data);

            var imgObj = data.data.docs;
            for (var x = 0; x < imgObj.length; x++) {
                var imgUrl = imgObj[x].url;
                var imgHtml = ` <div class="grid-item">
                                    <img src="./img/${imgUrl}" alt="" class="">
                                </div>`;

                $('.grid').append(imgHtml);
            }

            setTimeout(function () {
                console.log('Timer activated');
                gridReset();
            }, 1000);
        },
        error: (e) => {}
    });
}