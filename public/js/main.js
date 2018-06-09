// $(document).ready(function () {
//     $('.lol').submit(function (event) {
//         event.preventDefault();
//         var helperData = $('input[name=photo]').val();

//         $.ajax({
//             url: '/uploads',
//             data: helperData,
//             type: "POST",
//             dataType: 'form-data',
//             success: function (data) {
//                 console.log(data);
//             },
//             error: function (data) {
//                 console.error(data);
//             }
//         });
//     });
// });

// // function test(helperData) {
// //     return $.ajax({
// //         url: '/uploads',
// //         data: helperData,
// //         type: "POST",
// //         success: function (data) {
// //             console.log(data);
// //         },
// //         error: function (data) {
// //             console.error(data);
// //         }
// //     });
// // }