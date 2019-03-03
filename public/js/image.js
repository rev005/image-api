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
            let pageUrls = data.map((x) =>  x.filename);
            let imageObj = {
                url: pageUrls[0],
                pageUrls: pageUrls,
                tags: ["test1", "test2"]
            };
            imagePostMongo(imageObj);
        },
        error: (e) => {}
    });
}

function imagePostMongo(imageObj) {
    console.log(imageObj);
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
        data:{
          page: 1,
          limit:100
        },
        success: (data) => {
            console.log(data);

            var imgObj = data.data.docs;
            for (var x = 0; x < imgObj.length; x++) {
                var imgUrl = imgObj[x].url;
                let bookId = imgObj[x]._id;
                var imgHtml = ` <div class="grid-item">
                                    <img src="./img/${imgUrl}" alt="No Image" class="" data-id="${bookId}">
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