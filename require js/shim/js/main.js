/**
 * Created by dell on 2018/3/18.
 */
require.config({
    shim:{
        aa:{
            deps:["bb"],
            exports:'aa'
        }
    }
});
require(["aa"],function (aa) {
    aa.con();
});

