require.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(["dialog","jquery"],function (dialog,$) {
    // var oBtn = document.getElementById("btn")
    $("#btn").click( function () {
        console.log("1");
        dialog.open();
    })
});
