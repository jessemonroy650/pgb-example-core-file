var filePlugin = {
    version : '1.0.0',

    //
    onInitFs : function (fs) {

        fs.root.getFile('files:///android_asset/fanfare3.ogg', {create: false}, function(fileEntry) {
            var tempdata = "" +
            "<p class=r /><b>fileEntry.isFile:</b> "   + fileEntry.isFile +
            "<p class=g /><b>fileEntry.name:</b> "     + fileEntry.name +
            "<p class=b /><b>fileEntry.fullPath:</b> " + fileEntry.fullPath;

            document.getElementById('status').innerHTML = tempdata;

        }, function (e) { alert('onInitFs() error:' + JSON.stringify(e)) });

    },
    //
    properties2HTML : function (outputElementId) {
        var fileStuff = "" +
        "<p class=r /><b>cordova.file.applicationDirectory:</b> "                + cordova.file.applicationDirectory +
        "<p class=g /><b>cordova.file.applicationStorageDirectory:</b> "         + cordova.file.applicationStorageDirectory +
        "<p class=b /><b>cordova.file.dataDirectory:</b> "                       + cordova.file.dataDirectory +
        "<p class=a /><b>cordova.file.cacheDirectory:</b> "                      + cordova.file.cacheDirectory +
        "<p class=p /><b>cordova.file.externalApplicationStorageDirectory:</b> " + cordova.file.externalApplicationStorageDirectory +
        "<p class=r /><b>cordova.file.externalDataDirectory:</b> "               + cordova.file.externalDataDirectory +
        "<p class=g /><b>cordova.file.externalCacheDirectory:</b> "              + cordova.file.externalCacheDirectory +
        "<p class=b /><b>cordova.file.externalRootDirectory:</b> "               + cordova.file.externalRootDirectory; 

        document.getElementById(outputElementId).innerHTML = fileStuff;
    },
    //
    aboutFile2HTML : function (fileEntry, feedbackId) {
        var feedbackStuff = "" +
        "<p class=r /><b>fileEntry.isFile:</b> "      + fileEntry.isFile +
        "<p class=g /><b>fileEntry.isDirectory:</b> " + fileEntry.isDirectory +
        "<p class=b /><b>fileEntry.name:</b> "        + fileEntry.name +
        "<p class=r /><b>fileEntry.fullPath:</b> "    + fileEntry.fullPath;

        document.getElementById(feedbackId).innerHTML = feedbackStuff;
    }
    //
}
