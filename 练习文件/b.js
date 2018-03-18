// require(["sort"],function (sortArr) {
//     var arr = [5,8,6,1,3];
//     var arr1 = sortArr(arr);
//     console.log(arr1);
// });
define(function (require) {
    var  arr = [5,8,6,3,1];
    var sortArr = require("sort");
    console.log(sortArr(arr));
});