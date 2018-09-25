var filePlugin = {
    version : '1.0.0',

    function properties2HTML(outputElementId) {
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
    function aboutFile2HTML(fileEntry, feedbackId) {
        var feedbackStuff = "" +
        "<p class=r /><b>fileEntry.isFile:</b> "      + fileEntry.isFile +
        "<p class=g /><b>fileEntry.isDirectory:</b> " + fileEntry.isDirectory +
        "<p class=b /><b>fileEntry.name:</b> "        + fileEntry.name +
        "<p class=r /><b>fileEntry.fullPath:</b> "    + fileEntry.fullPath;

        document.getElementById(feedbackId).innerHTML = feedbackId;
    }
    //
/*
    function readFile(fileEntry, feedbackId) {
        var feedbackStuff = "" +

        fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function() {
                console.log("Successful file read: " + this.result);
                displayFileData(fileEntry.fullPath + ": " + this.result);
            };
 
            reader.readAsText(file);
 
        }, onErrorReadFile);
    }
*/
}
