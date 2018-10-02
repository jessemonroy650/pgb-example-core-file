var filePlugin = {
    version : '1.0.0',

    //
    onInitFs : function (fs) {

        fs.root.getFile('index.html', {create: false}, 
            function (fileEntry) {
                var tempdata = "" +
                "<br class=r /><b>fileEntry.isFile:</b> "   + fileEntry.isFile +
                "<br class=g /><b>fileEntry.name:</b> "     + fileEntry.name +
                "<br class=b /><b>fileEntry.fullPath:</b> " + fileEntry.fullPath;

                document.getElementById('status').innerHTML = tempdata;
            }, 
            function (e) { 
               document.getElementById('status').innerHTML = 'onInitFs() error:' + JSON.stringify(e);
               //alert('onInitFs() error:' + JSON.stringify(e));
            }
        );

    },
    //
    properties2HTML : function (outputElementId) {
        var fileStuff = "" +
        "<br class=r /><b>cordova.file.applicationDirectory:</b> "                + cordova.file.applicationDirectory +
        "<br class=g /><b>cordova.file.applicationStorageDirectory:</b> "         + cordova.file.applicationStorageDirectory +
        "<br class=b /><b>cordova.file.dataDirectory:</b> "                       + cordova.file.dataDirectory +
        "<br class=a /><b>cordova.file.cacheDirectory:</b> "                      + cordova.file.cacheDirectory +
        "<br class=p /><b>cordova.file.externalApplicationStorageDirectory:</b> " + cordova.file.externalApplicationStorageDirectory +
        "<br class=r /><b>cordova.file.externalDataDirectory:</b> "               + cordova.file.externalDataDirectory +
        "<br class=g /><b>cordova.file.externalCacheDirectory:</b> "              + cordova.file.externalCacheDirectory +
        "<br class=b /><b>cordova.file.externalRootDirectory:</b> "               + cordova.file.externalRootDirectory; 

        document.getElementById(outputElementId).innerHTML = fileStuff;
    },
    //
    aboutFile2HTML : function (fileEntry, feedbackId) {
        var feedbackStuff = "" +
        "<br class=r /><b>fileEntry.isFile:</b> "      + fileEntry.isFile +
        "<br class=g /><b>fileEntry.isDirectory:</b> " + fileEntry.isDirectory +
        "<br class=b /><b>fileEntry.name:</b> "        + fileEntry.name +
        "<br class=r /><b>fileEntry.fullPath:</b> "    + fileEntry.fullPath;

        document.getElementById(feedbackId).innerHTML = feedbackStuff;
    }
    //
}
